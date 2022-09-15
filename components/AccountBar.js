import NextLink from "next/link";
import { Box, Text, Link } from "@chakra-ui/react";

const AccountBar = (props) => {
  return (
    <NextLink passHref href="/account">
      <Box
        as={Link}
        w="100%"
        display="flex"
        gap="18px"
        pl="1rem"
        py="1rem"
        borderRadius={"6px"}
        _hover={{ bg: "#F6F8FA", textDecoration: "none" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Text
          fontFamily={"poppins"}
          fontWeight={500}
          fontSize="18px"
          color={props.color}
        >
          {props.text}
        </Text>
      </Box>
    </NextLink>
  );
};

export default AccountBar;
