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
import ReviewScore from "./ReviewScore";
import ScoreSubmitted from "./ScoreSubmitted";
import Invitation from "./Invitation";
import SearchInput from "./SearchInput";

const SideBar = () => {
  const router = useRouter();

  return (
    <Box
      fontFamily={"poppins"}
      pt="3rem"
      w="20%"
      float={"left"}
      display="flex"
      flexDir={"column"}
      boxShadow="base"
      h="150vh"
    >
      <Box mb="2rem" px="13px">
        <Image src={logo} alt="nfmj logo" />
      </Box>
      <SearchInput />

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
        <Accordion allowToggle>
          <AccordionItem border="none" pb="1rem">
            <AccordionButton>
              <ManuscriptBar
                _expanded={{ color: "black" }}
                color={
                  router.pathname.includes("manuscript") ? "black" : "#8D91A0"
                }
                text="Manuscript"
              />
            </AccordionButton>

            <AccordionPanel>
              <Box w="100%" display={"flex"} flexDir="column">
                <AllManuscript
                  color={
                    router.pathname === "/allmanuscript" ? "black" : "#8D91A0"
                  }
                />
                <AddNewManuscript
                  color={
                    router.pathname === "/addmanuscript" ? "black" : "#8D91A0"
                  }
                />
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton>
              <ReviewBar
                color={router.pathname.includes("review") ? "black" : "#8D91A0"}
                text="Review"
              />
            </AccordionButton>
            <AccordionPanel>
              <Box w="100%" display={"flex"} flexDir="column">
                <ReviewScore
                  color={router.pathname === "/review" ? "black" : "#8D91A0"}
                />
                <ScoreSubmitted
                  color={
                    router.pathname === "/review-score" ? "black" : "#8D91A0"
                  }
                />
                <Invitation
                  color={
                    router.pathname === "/review-invitation" ? "black" : "#8D91A0"
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
