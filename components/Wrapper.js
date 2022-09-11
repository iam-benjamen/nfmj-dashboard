import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box
      pl="3.5rem"
      pt="3.5rem"
      pr="4rem"
      float={{ base: "none", lg: "right" }}
      width={{ base: "95%", lg: "80%" }}
      fontFamily="poppins"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
