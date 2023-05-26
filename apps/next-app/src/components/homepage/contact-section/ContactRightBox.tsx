import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SystemStyleObject,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'

import { BiMailSend } from 'react-icons/bi'

// @TODO: implement sending form - emailing, form submission and state handling, refactor form elements

const ContactRightBox = () => {
  const mainStyles: SystemStyleObject = {
    gridColumn: 'col-start 6/content-end',
    gridRow: 'r3-start/r3-end',
    my: sizes.lg,
    padding: sizes.lg,
    backgroundColor: 'orange.50',
    borderRadius: 'lg',
    boxShadow: 'md',
    zIndex: '2',
  }

  return (
    <GridItem sx={mainStyles}>
      <VStack as="form" gap={sizes.md} alignItems="flex-start">
        <HStack gap={sizes.sm} justifyContent="space-around" width="100%">
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              name="fullname"
              placeholder="John Ndoe"
              focusBorderColor="orange.400"
              errorBorderColor="red.300"
              colorScheme="orange"
              size="md"
              variant="flushed"
            />
            <FormErrorMessage>Please add a valid full name</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="johnndoe@gmail.com"
              focusBorderColor="orange.400"
              errorBorderColor="red.300"
              colorScheme="orange"
              size="md"
              variant="flushed"
            />
            <FormErrorMessage>
              Please add a valid email address
            </FormErrorMessage>
          </FormControl>
        </HStack>

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
          <CheckboxGroup defaultValue={['others']}>
            <Box
              display="flex"
              flexDirection={['column', 'row']}
              flexWrap="wrap"
              rowGap="2"
              columnGap="4"
              justifyContent="flex-start"
              alignContent="flex-start"
            >
              <Checkbox value="ui/ux" colorScheme="orange">
                Web Design (UI/UX)
              </Checkbox>
              <Checkbox value="api-dev" colorScheme="orange">
                API Development
              </Checkbox>
              <Checkbox value="frontend" colorScheme="orange">
                Frontend Design
              </Checkbox>
              <Checkbox value="others" colorScheme="orange">
                Others
              </Checkbox>
            </Box>
          </CheckboxGroup>
        </Box>

        <FormControl isRequired>
          <FormLabel>Your Message</FormLabel>
          <Textarea
            placeholder="Write your message here..."
            variant="flushed"
            focusBorderColor="orange.400"
            errorBorderColor="red.300"
            colorScheme="orange"
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" rightIcon={<BiMailSend />}>
          Send Message
        </Button>
      </VStack>
    </GridItem>
  )
}

export default ContactRightBox
