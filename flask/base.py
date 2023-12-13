import json
import os
from flask import Flask, request, jsonify, request, url_for, redirect, render_template
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))

api = Flask(__name__)

# Next, the flask application instance is configured with the JWT secret key then passed as an argument to the JWTManager function and assigned to the jwt variable.



api.config["JWT_SECRET_KEY"] = "please-remember-to-change-me"
api.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(api)
api.config["SQLALCHEMY_DATABASE_URI"] =\
        'sqlite:///' + os.path.join(basedir, 'database.db')
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(api)
bcrypt=Bcrypt(api)


#user databse model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False) 
    first = db.Column(db.String(100), nullable=False)
    last = db.Column(db.String(100), nullable=False)
    school = db.Column(db.String(100), nullable=False)
    year = db.Column(db.String(100), nullable=False)


## this is to timeout a login request after an hour
@api.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response

## creates the login token
@api.route('/login', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    checkUser = User.query.filter_by(email=email).first()
    if not checkUser:
        return {"msg": "Account not found, please create new account"}, 401
    checkPass=bcrypt.check_password_hash(checkUser.password, password) #dehash password
    if not checkPass:
        return{"msg": "Wrong credentials"}, 401
#create access token if use exists & password is correct
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


#create new profile 
@api.route("/signup", methods=["POST"])
def create_account():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    checkIfNewUser = User.query.filter_by(email=email).all() #check if user exists
    if checkIfNewUser: 
        return{"msg" "This email is already associated with an account. Please sign in"}, 401
    password = bcrypt.generate_password_hash(password,10) #password hashing
    first = request.json.get("first", None)
    last = request.json.get("last", None)
    school = request.json.get("school", None)
    year = request.json.get("year",None)
    UserTemp = User(email=email, password=password, first=first, last=last, school=school, year=year)
    db.session.add(UserTemp)
    db.session.commit() # user added to database
    access_token = create_access_token(identity=email) #access token created
    return jsonify(access_token=access_token)

#lets the user logout
@api.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response
   
# Define a route for the root URL '/'
@api.route('/', methods=["GET"])
def index():
    return "Welcome to the API"

@api.route('/protected', methods=["GET"])
@jwt_required()
def protected():
    current_user=get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

