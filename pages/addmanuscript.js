import Wrapper from "../components/Wrapper";
import {
  Box,
  Button,
  Text,
  Link,
  Input,
  Textarea,
  useCheckbox,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SearchInput from "../components/SearchInput";
import CustomCheckBox from "../components/CustomCheckBox";

const AddManuscript = () => {
  return (
    <Wrapper>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent="space-between"
        pb="2rem"
      >
        <Text fontWeight={600} fontSize="1.5rem">
          Add New Manuscript
        </Text>
        <Box>
          <NextLink passHref href="/addmanuscript">
            <Button
              as={Link}
              fontSize={"14px"}
              color="white"
              borderRadius="8px"
              bg="#CA251C"
              h="2.6rem"
              _hover={{ transform: "translateY(-10%)" }}
            >
              Proceed to upload files
            </Button>
          </NextLink>
        </Box>
      </Box>
      <Box display={"flex"} gap="2rem">
        <Box display={"flex"} flexDir="column" w="100%" gap="2.75rem">
          <Input
            type="text"
            placeholder="Enter title here"
            _placeholder={{ color: "#898FA3" }}
            fontWeight={400}
            fontSize="18px"
            bg="#F6F8FA"
            borderRadius="5px"
            w="100%"
            h="3.5rem"
            border="none"
            focusBorderColor="#898FA3"
          />
          <Box
            pb="2.5rem"
            bg={"#F7F6F9"}
            borderRadius="12px"
            px="2rem"
            pt="1.5rem"
            h="26rem"
          >
            <Text pb="13px" fontWeight={500} fontSize="22px">
              Abstract
            </Text>
            <Textarea
              border="1px solid #EEEEEE"
              focusBorderColor="none"
              minH="85%"
              borderRadius="12px"
              bg="white"
            ></Textarea>
          </Box>
          <Box
            pb="2.5rem"
            bg={"#F7F6F9"}
            borderRadius="12px"
            px="2rem"
            pt="1.5rem"
          >
            <Text pb="13px" fontWeight={500} fontSize="22px">
              Attributes
            </Text>
            <Text pb="1rem" fontSize={"14px"} fontWeight={400}>
              Seperate each attribute with a comma
            </Text>
            <Textarea
              border="1px solid #EEEEEE"
              focusBorderColor="none"
              minH="6.5rem"
              borderRadius="12px"
              bg="white"
            ></Textarea>
          </Box>
        </Box>
        <Box display={"flex"} flexDir="column" gap="2rem">
          <Box borderRadius={"12px"} p="1.5rem" bg="#F7F6F9">
            <Text fontWeight={500} fontSize="xl" pb="1rem">
              Types
            </Text>
            <VStack gap="1rem">
              <CustomCheckBox text="Commentaries" />
              <CustomCheckBox text="Clinical Review" />
              <CustomCheckBox text="Research Reviews" />
              <CustomCheckBox text="Research Surveys" />
              <CustomCheckBox text="Case Report" />
              <CustomCheckBox text="Current Practice" />
              <CustomCheckBox text="Resident View" />
              <CustomCheckBox text="Hypothesis" />
            </VStack>
          </Box>
          <Box borderRadius={"12px"} p="1.5rem" bg="#F7F6F9">
            <Text pb="10px" fontWeight={500} fontSize="1.25rem">
              Add Authors
            </Text>
            <Text pb="1rem">
              Add co-authors by adding their registered email address
            </Text>
            <SearchInput />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default AddManuscript;
