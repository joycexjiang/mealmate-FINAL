import React, {useState} from 'react';

import {Cross1Icon} from '@radix-ui/react-icons'

import {
  Flex,
  Spacer,
  Stack,
  // StackDivider,
  VStack,
  HStack,
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Heading,
  Button,
  Avatar,
  // Divider,
  // Image, 
  // ButtonGroup,
  // FormControl,
  // FormLabel,
  Input,
  ChakraProvider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

function ModalInvite() {
  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(8px)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <Button onClick={onOpen} size='sm'>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader color='#FFE67D' fontSize='30px' as='b'>New event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">
              <Flex width='full'> 
                <Box 
                  backgroundColor="#F1F1F1"
                  padding="3"
                  borderRadius="lg"
                  // boxShadow="md"
                  minWidth="193px"
                  // minHeight="sm"
                  display="flex"
                  flexDirection="column"
                >
                  <Text color='#BEBEBE' fontSize='14px' as='b'>
                    FROM
                  </Text>
                  <Text color='#797979' fontSize='20px'>
                    11:30 AM
                  </Text>
                  <Text color='#797979' fontSize='15px'>
                    2 Dec 2022
                  </Text>
                </Box>
                <Spacer />
                <Box 
                  backgroundColor="#F1F1F1"
                  padding="3"
                  borderRadius="lg"
                  // boxShadow="md"
                  minWidth="193px"
                  // minHeight="sm"
                  display="flex"
                  flexDirection="column"
                >
                  <Text color='#BEBEBE' fontSize='14px' as='b'>
                    TO
                  </Text>
                  <Text color='#797979' fontSize='20px'>
                    12:00 PM
                  </Text>
                  <Text color='#797979' fontSize='15px'>
                    2 Dec 2022
                  </Text>
                </Box>
              </Flex>
              <Box 
                backgroundColor="#F1F1F1"
                padding="3"
                borderRadius="lg"
                // minHeight="sm"
                display="flex"
                // minWidth="250"
                width="full"
                flexDirection="column"
              >
                <Text color='#BEBEBE' fontSize='14px' as='b'>
                  GUESTS
                </Text>
                <Stack direction='row'>
                  <Avatar name='David Lee' src='https://bit.ly/broken-link' />
                  <Avatar name='Joyce Jiang' src='https://bit.ly/broken-link' />
                  <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                </Stack>
              </Box>
              <Box 
                backgroundColor="#F1F1F1"
                padding="3"
                borderRadius="lg"
                width='full'
                // minHeight="sm"
                display="flex"
                flexDirection="column"
              >
              <Flex width='full'> 
                <Text color='#BEBEBE' fontSize='14px' as='b'>
                  WHERE
                </Text>
                <Spacer />
                <Popover>
                  <PopoverTrigger>
                    <Text color='#BEBEBE' fontSize='14px' as='u'>
                      CHECK DINING HOURS
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent minWidth="410px">
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Dining hall hours</PopoverHeader>
                    <PopoverBody>
                      <Stack>
                        <Flex width='full'> 
                          <Text>John Jay</Text>
                          <Spacer />
                          <Text color='#797979'>7:30 AM - 8:00 PM</Text>
                          <Spacer />
                          <Text color='#34A853' as='b'>OPEN</Text>
                        </Flex>
                        <Flex width='full'> 
                          <Text>JJ's Place</Text>
                          <Spacer />
                          <Text color='#797979'>7:30 AM - 8:00 PM</Text>
                          <Spacer />
                          <Text color='#34A853' as='b'>OPEN</Text>
                        </Flex>
                        <Flex width='full'> 
                          <Text>Ferris</Text>
                          <Spacer />
                          <Text color='#797979'>7:30 AM - 8:00 PM</Text>
                          <Spacer />
                          <Text color='#F5576C' as='b'>CLOSED</Text>
                        </Flex>
                        <Flex width='full'> 
                          <Text>Chef Don's</Text>
                          <Spacer />
                          <Text color='#797979'>7:30 AM - 8:00 PM</Text>
                          <Spacer />
                          <Text color='#F5576C' as='b'>CLOSED</Text>
                        </Flex>
                      </Stack>
                      {/* Are you sure you want to have that milkshake? */}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
                <Input 
                // onChange={handleChange}
                variant='unstyled'
                // type="email"
                // name="email"
                color="#797979"
                font-weight="bold"
                placeholder="Add location"
                _placeholder={{ opacity: 1, color: '#BEBEBE'}}
                // value={loginForm.email} 
                />

              </Box>

              <Box 
                backgroundColor="#F1F1F1"
                padding="3"
                borderRadius="lg"
                width='full'
                // minHeight="sm"
                display="flex"
                flexDirection="column"
              >
                <Text color='#BEBEBE' fontSize='14px' as='b'>
                  DESCRIPTION
                </Text>
                <Input 
                // onChange={handleChange}
                variant='unstyled'
                // type="email"
                // name="email"
                color="#797979"
                font-weight="bold"
                placeholder="Add description"
                _placeholder={{ opacity: 1, color: '#BEBEBE'}}
                // value={loginForm.email} 
                />
              </Box>

            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing="4" justify="space-between">
              <Button onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>
                Create
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
  }

  export default ModalInvite;
