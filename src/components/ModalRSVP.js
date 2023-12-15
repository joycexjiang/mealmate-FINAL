import React, {useState} from 'react';

import {Cross1Icon} from '@radix-ui/react-icons'

import { 
    TimeIcon, 
    AtSignIcon, 
    InfoIcon,
    CheckIcon,
    CloseIcon,
    BellIcon
} from '@chakra-ui/icons'

import {
  Flex,
  Spacer,
  Stack,
  IconButton,
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

function ModalRSVP() {
  
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
      <Button onClick={onOpen} size='sm'>Open Modal RSVP</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='sm'>
        {overlay}
        <ModalContent>
          <ModalHeader color='#FFE67D' fontSize='30px' as='b'>Event Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing="4">
            <Flex width='full'
              >
                <Box display='flex'>
                <TimeIcon w={6} h={6}/>
                <Box 
                    width='30px'
                />
                <Text fontSize='16px'>
                  2 Dec 2022
                </Text>
                </Box>
                <Spacer />
                <Text fontSize='16px'>
                  11:30 AM - 12:00 PM
                </Text>
            </Flex>
            <Flex width='full'
              >
                <AtSignIcon w={6} h={6}/>
                <Box 
                    width='30px'
                />
                <Text fontSize='16px'>
                  Ferris
                </Text>
            </Flex>
            <Flex width='full'
              >
                <InfoIcon w={6} h={6}/>
                <Box 
                    width='30px'
                />
                <Text fontSize='16px'>
                  Your description
                </Text>
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
                GOING
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
            // minHeight="sm"
            display="flex"
            // minWidth="250"
            width="full"
            flexDirection="column"
            >
            <Text color='#BEBEBE' fontSize='14px' as='b'>
                NOT GOING
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
            // minHeight="sm"
            display="flex"
            // minWidth="250"
            width="full"
            flexDirection="column"
            >
            <Text color='#BEBEBE' fontSize='14px' as='b'>
                NOT RESPONDED
            </Text>
            <Flex>
                <Stack direction='row'>
                    <Avatar name='David Lee' src='https://bit.ly/broken-link' />
                    <Avatar name='Joyce Jiang' src='https://bit.ly/broken-link' />
                    <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
                </Stack>
                <Spacer />

                <Popover>
                    <PopoverTrigger>
                    <IconButton
                        icon={<BellIcon />}
                        fontSize='20px'
                        backgroundColor="#CECECE"
                    />
                    </PopoverTrigger>
                    <PopoverContent maxWidth="200px">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Send Reminder?</PopoverHeader>
                        <PopoverBody>
                            <Flex>
                            <Button width='full'>Send</Button>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>

                
            </Flex>
            </Box>

            <HStack>
                <Text>
                    Going?
                </Text>
                <Box 
                backgroundColor="#F1F1F1"
                padding="3"
                borderRadius="lg"
                // minHeight="sm"
                display="flex"
                >
                    <IconButton
                    isRound={true}
                    variant='solid'
                    colorScheme='green'
                    aria-label='Done'
                    fontSize='20px'
                    icon={<CheckIcon />}
                    />
                    <Box 
                    width='4'
                    >
                    </Box>
                    <IconButton
                    isRound={true}
                    variant='solid'
                    colorScheme='red'
                    aria-label='Done'
                    fontSize='20px'
                    icon={<CloseIcon />}
                    />
                </Box>
                <Box width='10'></Box>
            </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
              <Button onClick={onClose} colorScheme='red'>
                Cancel event
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
  }

  export default ModalRSVP;
