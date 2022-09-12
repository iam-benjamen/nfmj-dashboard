import {
  Box,
  Table,
  Thead,
  Text,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const ManuscriptTable = () => {
  return (
    <Box fontFamily={"poppins"} px="1rem">
      <TableContainer maxH={"30rem"} pt="1rem" overflowY={"scroll"}>
        <Table variant="simple">
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
                Status
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
                <Text color={"#FF9900"} fontWeight={500} fontSize="14px">
                  PENDING
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
  );
};

export default ManuscriptTable;
