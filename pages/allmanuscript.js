import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Button, Select, Text, Link } from "@chakra-ui/react";
import ManuscriptTable from "../components/ManuscriptTable";
import Wrapper from "../components/Wrapper";
import NextLink from "next/link";

const ManuScript = () => {
  return (
    <Wrapper>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent="space-between"
        pb="2rem"
      >
        <Box display={"flex"} gap="2rem">
          <Text fontWeight={600} fontSize="1.5rem">
            Manuscripts
          </Text>
          <Select
            icon={<TriangleDownIcon pl=".2rem" />}
            w="max-content"
            h="2.1rem"
            border="1px solid #E8E9EB"
            borderRadius="8px"
            focusBorderColor="none"
            fontSize="14px"
            fontWeight={500}
            cursor="pointer"
          >
            <option value="all">All manuscripts</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
          </Select>
        </Box>
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
              Add New Manuscript
            </Button>
          </NextLink>
        </Box>
      </Box>
      <Box w="100%" bg="#F7F6F9" borderRadius={"12px"}>
        <ManuscriptTable maxH="30rem" />
      </Box>
    </Wrapper>
  );
};

export default ManuScript;
