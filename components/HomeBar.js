import NextLink from "next/link";
import { Box, Text, Link } from "@chakra-ui/react";

const HomeBar = (props) => {
  return (
    <NextLink passHref href="/">
      <Box
        as={Link}
        w="10%%"
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
            d="M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z"
            stroke={props.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.99V14.99"
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

export default HomeBar;
