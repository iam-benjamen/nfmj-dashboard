import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Select,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import Image from "next/image";
import greendot from "../public/sidebar/greendot.svg";

const ReviewScore = () => {
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
          Scores Submitted
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
          <option value="accepted">score</option>
        </Select>
      </Box>
      <Box pb='2rem' pt="2.2rem" pl="2rem" bg={"#F7F6F9"} borderRadius="12px">
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
                  Score
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
                    Clinical Review
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    8.0
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
                    Clinical Review
                  </Text>
                </Td>
                <Td>
                  <Text color={""} fontWeight={500} fontSize="14px">
                    8.0
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
                    8.0
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
                    9.0
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
                    8.0
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    After checking this manuscript for plagiarism,
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
                    8.0
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
                    8.0
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    After checking this manuscript for plagiarism,
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
                    8.0
                  </Text>
                </Td>
                <Td>
                  <Text fontWeight={400} fontSize="14px">
                    After checking this manuscript for plagiarism,
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

export default ReviewScore;
