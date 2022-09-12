import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import greendot from "../public/sidebar/greendot.svg";

const AllManuscript = (props) => {
  return (
    <NextLink passHref href="/allmanuscript">
      <Box
        fontWeight={500}
        fontSize="1rem"
        w="100%"
        py=".5rem"
        px="1rem"
        display="flex"
        as={Link}
        gap="19px"
        fontFamily={"poppins"}
        color={props.color}
        borderRadius="6px"
        _hover={{ bg: "#F6F8FA", textDecoration: "none" }}
      >
        <Image src={greendot} alt="dot" />
        All Manuscript
      </Box>
    </NextLink>
  );
};

export default AllManuscript;
