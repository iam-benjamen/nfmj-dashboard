import { Box, VStack, Text } from "@chakra-ui/react";
import manuscripticon from "../public/homepage/manuscripticon.png";
import invitationicon from "../public/homepage/invitationicon.png";
import scoreicon from "../public/homepage/scoreicon.png";
import pendingicon from "../public/homepage/pendingicon.png";
import Image from "next/image";

const MainBar = (props) => {
  return (
    <Box
      w="100%"
      bg="black"
      borderRadius={"12px"}
      px="3rem"
      py="3rem"
      fontFamily={"poppins"}
      display="flex"
      justifyContent={"space-between"}
    >
      <Box display={"flex"} gap="1.25rem">
        <Box>
          <Image src={manuscripticon} alt="manuscript icon" />
        </Box>
        <VStack alignItems={"flex-start"}>
          <Text color="white" fontSize={"1rem"}>
            Manuscripts
          </Text>
          <Text
            mt="0rem !important"
            fontSize={"1.5rem"}
            fontWeight={600}
            color="white"
          >
            64
          </Text>
        </VStack>
      </Box>

      <Box display={"flex"} gap="1.25rem">
        <Box>
          <Image src={pendingicon} alt="manuscript icon" />
        </Box>
        <VStack alignItems={"flex-start"}>
          <Text color="white" fontSize={"1rem"}>
            Pending Reviews
          </Text>
          <Text
            mt="0rem !important"
            fontSize={"1.5rem"}
            fontWeight={600}
            color="white"
          >
            27
          </Text>
        </VStack>
      </Box>

      <Box display={"flex"} gap="1.25rem">
        <Box>
          <Image src={scoreicon} alt="manuscript icon" />
        </Box>
        <VStack alignItems={"flex-start"}>
          <Text color="white" fontSize={"1rem"}>
            Scores Submitted
          </Text>
          <Text
            mt="0rem !important"
            fontSize={"1.5rem"}
            fontWeight={600}
            color="white"
          >
            109
          </Text>
        </VStack>
      </Box>

      <Box display={"flex"} gap="1.25rem">
        <Box>
          <Image src={invitationicon} alt="manuscript icon" />
        </Box>
        <VStack alignItems={"flex-start"}>
          <Text color="white" fontSize={"1rem"}>
            Invitations
          </Text>
          <Text
            mt="0rem !important"
            fontSize={"1.5rem"}
            fontWeight={600}
            color="white"
          >
            13
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default MainBar;
