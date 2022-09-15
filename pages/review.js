import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Image from "next/image";
import Wrapper from "../components/Wrapper";
import greendot from "../public/sidebar/greendot.svg";

const Review = () => {
  return (
    <Wrapper>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent="flex-start"
        gap="2rem"
        pb="2rem"
      >
        <Text fontWeight={600} fontSize="1.5rem">
          Review and Score
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
          placeholder="Sort by"
        >
          <option value="pending">type</option>
          <option value="accepted">deadline</option>
        </Select>
      </Box>
      <Box pt="2.2rem" pl="2rem" bg={"#F7F6F9"} borderRadius="12px">
        <TableContainer overflowY={"scroll"}>
          <Table variant={"simple"}>
            <Thead>
              <Tr pb="18px" borderBottom="1px solid #E8E9EB">
                <Th
                  fontFamily={"poppins"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color="#979CA8"
                  textTransform={"none"}
                >
                  Manuscript Title
                </Th>
                <Th
                  fontFamily={"poppins"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color="#979CA8"
                  textTransform={"none"}
                >
                  Type
                </Th>
                <Th
                  fontFamily={"poppins"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color="#979CA8"
                  textTransform={"none"}
                >
                  Deadline
                </Th>
                <Th
                  fontFamily={"poppins"}
                  fontWeight={500}
                  fontSize={"14px"}
                  color="#979CA8"
                  textTransform={"none"}
                >
                  Comment
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Text fontWeight={500} fontSize="14px">
                    Management of patients with elevated Self-BAT scores.
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} color="#758393" fontSize={"14px"}>
                    Commentary
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    <Image src={greendot} alt="green dot" /> 22/12/2022
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    No Comment
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Wrapper>
  );
};

export default Review;
