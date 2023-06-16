/* eslint-disable react/jsx-no-bind */
import { useEffect, useRef, useState } from 'react'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  SystemStyleObject,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { SolidBtn } from 'ui'

import { BiMailSend } from 'react-icons/bi'
import { IContactFormData, contactMe } from 'src/server-lib/lib/contactMe'
import CvDownloadBtn from '@components/next-ui/buttons/CvDownloadBtn'

// @TODO: implement sending form - emailing, form submission and state handling, refactor form elements
// @TODO: implement form validation and CSRF
// @TODO:  Make Text Message expandable
// @TODO: add a download resume button

const ContactRightBox = () => {
  const [formHasErrors, setFormHasErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  /// auto remove success message
  useEffect(() => {
    setIsSubmitting(false)
    const timer = setTimeout(() => {
      setSuccessMessage('')
    }, 10000)

    return () => clearTimeout(timer)
  }, [successMessage])

  /// auto remove error message
  useEffect(() => {
    setIsSubmitting(false)
    const timer = setTimeout(() => {
      setFormHasErrors(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [formHasErrors])

  const mainStyles: SystemStyleObject = {
    gridColumn: {
      base: 'content-start/content-end',
      md: 'col-start 6/content-end',
    },
    gridRow: { base: 'r3-start/r3-end' },
    my: sizes.lg,
    padding: sizes.lg,
    backgroundColor: 'orange.50',
    borderRadius: { base: 'md', md: 'lg' },
    boxShadow: 'md',
    zIndex: '2',
    position: 'relative',
    border: '2px solid',
    borderColor: 'orange.200',
  }

  async function sendFormDataHandler(data: FormData) {
    const validationMessage = 'You name/email/message/topic cannot be empty'

    try {
      /// resets

      /// client side data validation
      const { fullName, email, topic, message } = Object.fromEntries(
        data,
      ) as unknown as IContactFormData

      /// Naive validation @TODO: Implement full validation - at backend
      if (!fullName.trim() || !email.trim() || !message.trim() || !topic) {
        throw new Error(validationMessage)
      }

      // /// on success clear form inputs
      const res = await contactMe(data)

      /// reset values
      if (formHasErrors) {
        setErrorMessage('')
        setFormHasErrors(false)
      }

      setSuccessMessage(res.data.message)
      formRef.current!.reset()
    } catch (error: any) {
      const errorMess = error.message

      /// @TODO: move this to the server and return a generic response
      setErrorMessage(
        errorMess !== validationMessage
          ? '🥹 Sending your Message failed! Try again'
          : errorMess,
      )
      setFormHasErrors(true)
      setSuccessMessage('')
    }
  }

  function formSubmitResetHandler() {
    setIsSubmitting(true)
    setErrorMessage('')
    setFormHasErrors(false)
    setSuccessMessage('')
  }

  function closeMessageBoxHandler() {
    if (formHasErrors) {
      setFormHasErrors(false)
    }

    if (successMessage) {
      setSuccessMessage('')
    }
  }

  const alertStyles: SystemStyleObject = {
    borderRadius: 'md',
    position: 'absolute',
    left: '5',
    top: '-10',
    maxW: '90%',
  }

  return (
    <GridItem sx={mainStyles}>
      {/* Handle error messages */}

      {/* // show form error message */}
      {formHasErrors && (
        <Alert status="error" sx={alertStyles} onClick={closeMessageBoxHandler}>
          <AlertIcon />
          <AlertTitle>Form Errors!</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      {successMessage && (
        <Alert
          status="success"
          sx={alertStyles}
          onClick={closeMessageBoxHandler}
        >
          <AlertIcon />
          <AlertTitle>Form Success!</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}

      <VStack
        as="form"
        gap={sizes.md}
        alignItems="flex-start"
        // eslint-disable-next-line react/jsx-no-bind
        action={sendFormDataHandler}
        ref={formRef}
        onSubmit={formSubmitResetHandler}
      >
        <Flex
          gap={sizes.sm}
          justifyContent="space-around"
          width="100%"
          flexWrap={{ base: 'wrap', sm: 'nowrap' }}
          rowGap={{ base: 'auto', md: '3' }}
          columnGap={{ base: '3', md: 'auto' }}
        >
          <FormControl isRequired>
            <FormLabel mb={{ base: 0, md: 'inherit' }} htmlFor="fullName">
              Full Name
            </FormLabel>
            <Input
              type="text"
              name="fullName"
              placeholder="John Doe"
              focusBorderColor="orange.400"
              errorBorderColor="red.300"
              colorScheme="orange"
              size="md"
              variant="flushed"
              id="fullName"
            />
            <FormErrorMessage>Please add a valid full name</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel mb={{ base: 0, md: 'inherit' }} htmlFor="email">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="johnndoe@gmail.com"
              focusBorderColor="orange.400"
              errorBorderColor="red.300"
              colorScheme="orange"
              size="md"
              variant="flushed"
              autoComplete="true"
            />
            <FormErrorMessage>
              Please add a valid email address
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Box as="fieldset" width="100%">
          <Text
            as="legend"
            textAlign="start"
            mb="2"
            fontSize="md"
            fontWeight="medium"
          >
            What Would You like do discuss about?
          </Text>
          <RadioGroup size="md" name="topic" defaultValue="others">
            <Box
              display="flex"
              flexDirection={['column', 'row']}
              flexWrap="wrap"
              rowGap="2"
              columnGap="4"
              justifyContent="flex-start"
              alignContent="flex-start"
            >
              <Radio id="frontend" value="frontend" colorScheme="orange">
                Frontend Design
              </Radio>
              <Radio
                id="react-native"
                value="react-native"
                colorScheme="orange"
              >
                Mobile App{' '}
                <Box as="small" color="orange.400">
                  (React Native)
                </Box>
              </Radio>
              <Radio id="api-dev" value="api-dev" colorScheme="orange">
                API Development
              </Radio>
              <Radio id="fullStack" value="full stack" colorScheme="orange">
                Full Stack App
              </Radio>
              <Radio id="others" value="others" colorScheme="orange">
                Others
              </Radio>
            </Box>
          </RadioGroup>
        </Box>
        <FormControl isRequired>
          <FormLabel mb={{ base: 0, md: 'inherit' }} htmlFor="message">
            Your Message
          </FormLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            variant="flushed"
            focusBorderColor="orange.400"
            errorBorderColor="red.300"
            colorScheme="orange"
          />
        </FormControl>
        <Flex
          sx={{
            gap: '5',
            flexWrap: 'wrap',
            justifyContent: { base: 'space-between', md: 'flex-start' },
            width: '100%',
          }}
        >
          <SolidBtn
            props={{
              ...(isSubmitting ? {} : { rightIcon: <BiMailSend /> }),
              type: 'submit',
              disabled: !!isSubmitting,
              isDisabled: !!isSubmitting,
              'aria-disabled': !!isSubmitting,
              onClick: closeMessageBoxHandler,
            }}
            sx={{
              border: '1px solid',
              borderColor: 'orange.400',
              bgColor: 'orange.500',
              color: 'orange.50',
            }}
          >
            {isSubmitting ? (
              <HStack>
                <Box>Sending...</Box>{' '}
                <Spinner size="sm" colorScheme="whiteAlpha" />
              </HStack>
            ) : (
              'Send Message'
            )}
          </SolidBtn>

          <CvDownloadBtn outlineDownloadBtn hasPrevBtn={false} />
        </Flex>
      </VStack>
    </GridItem>
  )
}

export default ContactRightBox
