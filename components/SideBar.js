import {
  Box,
  Link,
  Input,
  Divider,
  Text,
  InputGroup,
  InputLeftElement,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import logo from "../public/sidebar/nfmj-logo.png";
import NextLink from "next/link";
import Image from "next/image";
import HomeBar from "../components/HomeBar";
import ManuscriptBar from "../components/ManuscriptBar";
import ReviewBar from "./ReviewBar";
import AccountBar from "./AccountBar";
import { useRouter } from "next/router";
import AllManuscript from "./AllManuscript";
import AddNewManuscript from "./AddNewMan";

const SideBar = () => {
  const router = useRouter();

  return (
    <Box
      fontFamily={"poppins"}
      pt="3rem"
      w="17.3rem"
      display="flex"
      flexDir={"column"}
      boxShadow="base"
      h="100vh"
    >
      <Box mb="2rem" px="13px">
        <Image src={logo} alt="nfmj logo" />
      </Box>
      <form action="">
        <InputGroup>
          <InputLeftElement pl="2rem">
            <Search2Icon color={"grey"} />
          </InputLeftElement>
          <Input
            mx="13px"
            pl="2.5rem"
            mb="1rem"
            type="search"
            w="100"
            h="2.625rem"
            placeholder="Search"
            borderRadius={"5px"}
            bg="#F6F8FA"
            focusBorderColor="#8D91b9"
            _placeholder={{ fontWeight: "500", fontSize: "14px" }}
          />
        </InputGroup>
      </form>

      <Divider orientation="horizontal" />
      <Box
        gap="1rem"
        pt="1rem"
        display={"flex"}
        flexDir="column"
        pl=".5rem"
        pr="1rem"
      >
        <HomeBar
          color={router.pathname === "/" ? "black" : "#8D91A0"}
          text="Dashboard"
        />
        <Accordion allowMultiple>
          <AccordionItem border="none" pb="1rem">
            <AccordionButton>
              <ManuscriptBar
                _expanded={{ color: "black" }}
                color={
                  router.pathname.includes("/manuscript") ? "black" : "#8D91A0"
                }
                text="Manuscript"
              />
            </AccordionButton>

            <AccordionPanel>
              <Box w="100%" display={"flex"} flexDir="column">
                <AllManuscript
                  color={
                    router.pathname === "/manuscript" ? "black" : "#8D91A0"
                  }
                />
                <AddNewManuscript
                  color={
                    router.pathname === "/manuscript" ? "black" : "#8D91A0"
                  }
                />
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton>
              <ReviewBar
                color={router.pathname === "/review" ? "black" : "#8D91A0"}
                text="Review"
              />
            </AccordionButton>
            <AccordionPanel>
              <Box w="100%" display={"flex"} flexDir="column">
                <AllManuscript
                  color={
                    router.pathname === "/manuscript" ? "black" : "#8D91A0"
                  }
                />
                <AddNewManuscript
                  color={
                    router.pathname === "/manuscript" ? "black" : "#8D91A0"
                  }
                />
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <AccountBar
          color={router.pathname === "/account" ? "black" : "#8D91A0"}
          text="Account"
        />
      </Box>
    </Box>
  );
};

export default SideBar;
