import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Select,
  Link,
} from "@chakra-ui/react";
import CustomRegField from "../components/CustomRegField";
import Wrapper from "../components/Wrapper";

const Account = () => {
  return (
    <Wrapper>
      <Text pb="2.5rem" fontWeight={600} fontSize="1.5rem">
        Account
      </Text>
      <Box>
        <Tabs>
          <TabList>
            <Tab
              as={Link}
              _hover={{ textDecor: "none" }}
              href="#personal_info"
              fontWeight={500}
              color="rgba(146, 50, 45, 0.65)"
              _selected={{
                color: "#CA251C",
                borderBottom: "2px solid #CA251C",
              }}
            >
              Personal info
            </Tab>
            <Tab
              as={Link}
              _hover={{ textDecor: "none" }}
              href="#institution"
              _selected={{
                color: "#CA251C",
                borderBottom: "2px solid #CA251C",
              }}
              fontWeight={500}
              color="rgba(146, 50, 45, 0.65)"
            >
              Institution
            </Tab>
            <Tab
              as={Link}
              _hover={{ textDecor: "none" }}
              href="#field"
              _selected={{
                color: "#CA251C",
                borderBottom: "2px solid #CA251C",
              }}
              fontWeight={500}
              color="rgba(146, 50, 45, 0.65)"
            >
              Field of Study
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box
        pt="4rem"
        id="personal_info"
        w="80%"
        display={"flex"}
        flexDir="column"
      >
        <Text pb=".5rem" fontWeight={500} fontSize="lg">
          Personal info
        </Text>
        <Text fontSize={"13px"} color="#898FA3">
          Update your personal details
        </Text>
        <Box
          pt="1.55rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Name
          </Text>
          <Box
            display={"grid"}
            gridTemplateColumns="auto auto"
            gridRowGap={"2rem"}
            gridColumnGap="2.5rem"
            w="70%"
          >
            <Select
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              color="black"
              fontSize="18px"
              cursor="pointer"
              placeholder="Professor"
            >
              <option value="pending">Dr</option>
              <option value="accepted">Mr</option>
            </Select>
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              type="text"
              placeholder="Daniel"
              _placeholder={{ color: "black" }}
              color="black"
              fontSize="18px"
            />
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              type="text"
              color="black"
              fontSize="18px"
              placeholder="Favour"
              _placeholder={{ color: "black" }}
            />
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              type="text"
              placeholder="Bamidele"
              _placeholder={{ color: "black" }}
              color="black"
              fontSize="18px"
            />
          </Box>
        </Box>
        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Email address
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="email"
              placeholder="olivarhye@gmail.com"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Degree
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="Doctorate"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>
      </Box>

      <Box pt="5rem" id="institution" w="80%" display={"flex"} flexDir="column">
        <Text pb=".5rem" fontWeight={500} fontSize="lg">
          Institution
        </Text>
        <Text fontSize={"13px"} color="#898FA3">
          Update institutions’ details
        </Text>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Institution
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="University of Ibadan"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Department
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="Medicine"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Phone Number
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="number"
              placeholder="080 355 333 22"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Address
          </Text>
          <Box w="70%">
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="University of Ibadan, Ojo Road"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>

        <Box
          pt="3rem"
          display={"flex"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text fontSize={"1rem"} fontWeight={400}>
            Location
          </Text>
          <Box
            w="70%"
            display={"grid"}
            gridTemplateColumns="auto auto"
            gridRowGap={"2rem"}
            gridColumnGap="2.5rem"
          >
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="Nigeria"
              _placeholder={{ color: "black" }}
              color="black"
            />
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="Oyo"
              _placeholder={{ color: "black" }}
              color="black"
            />
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="text"
              placeholder="Ibadan"
              _placeholder={{ color: "black" }}
              color="black"
            />
            <Input
              focusBorderColor="grey"
              border="1px solid #CCCCCC"
              borderRadius="5px"
              h="3rem"
              fontSize="18px"
              type="number"
              placeholder="200005"
              _placeholder={{ color: "black" }}
              color="black"
            />
          </Box>
        </Box>
      </Box>

      <Box pt="5rem" id="field" w="80%" display={"flex"} flexDir="column">
        <Text pb=".5rem" fontWeight={500} fontSize="lg">
          Institution
        </Text>
        <Text fontSize={"13px"} color="#898FA3">
          Update institutions’ details
        </Text>
        <Box
          pt="2.5rem"
          pb="3rem"
          w="100%"
          display={"grid"}
          gridTemplateColumns="auto auto auto"
          gridRowGap={"1rem"}
        >
          <CustomRegField name="Academic Medicine" />
          <CustomRegField name="Art and Medicine" />
          <CustomRegField name="Addiction Medicine" />

          <CustomRegField name="Aboriginal Medicine" />
          <CustomRegField name="Behavioural Science" />
          <CustomRegField name="Cancer Care" />

          <CustomRegField name="Cardiovascular Medicine" />
          <CustomRegField name="Clinical Practice" />
          <CustomRegField name="Dentistry" />

          <CustomRegField name="Dermatology" />
          <CustomRegField name="Genetics" />
          <CustomRegField name="Gynaecology" />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Account;
