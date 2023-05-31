import {
  GridItem,
  List,
  ListIcon,
  ListItem,
  SystemStyleObject,
  Text,
  VStack,
} from '@chakra-ui/react'
import { sizes } from '@components/next-ui'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const SummaryContentRight = () => {
  const mainStyles: SystemStyleObject = {
    gridRow: {
      base: '5/span 1',
      md: 'r3-start/r3-end',
    },
    gridColumn: {
      base: 'content-start / content-end',
      md: 'col-start 7 / content-end',
    },
    gap: '2',
    px: sizes.xs,
    pb: sizes.xl,
  }

  return (
    <GridItem sx={mainStyles} as={VStack}>
      {/* <HStack sx=''> */}
      {/* Text Block */}
      <Text>
        Lorem ipsum dolor sit amet consectetur. Pellentesque non tortor non
        volutpat mi. Facilisi purus faucibus eget suspendisse amet pharetra
        donec. Vulputate nulla faucibus sollicitudin eget fusce ornare accumsan
        sollicitudin eros.
      </Text>

      <Text>
        Purus laoreet amet et placerat a blandit mi fringilla aenean. Ipsum
        quisque blandit lacus risus et lobortis. Sed sit quisque nisl id.
        Aliquam aenean sapien arcu justo. Cras proin fusce orci pretium sit.
      </Text>

      {/* List content */}
      <List spacing={3} pl={{ base: '4', md: '6', xl: 0 }}>
        <ListItem>
          <ListIcon as={IoMdCheckmarkCircle} color="teal.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={IoMdCheckmarkCircle} color="teal.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={IoMdCheckmarkCircle} color="teal.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        <ListItem>
          <ListIcon as={IoMdCheckmarkCircle} color="teal.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
      {/* </HStack> */}
    </GridItem>
  )
}
export default SummaryContentRight
