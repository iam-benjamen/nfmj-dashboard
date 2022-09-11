import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import yellowdot from "../public/sidebar/yellowdot.svg";

const ReviewScore = (props) => {
  return (
    <NextLink passHref href="/review">
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
        <Image src={yellowdot} alt="dot" />
        Reviews and Score
      </Box>
    </NextLink>
  );
};

export default ReviewScore;
