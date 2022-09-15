import { Box, useCheckbox, chakra, Text, Flex } from "@chakra-ui/react";

const CustomRegField = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);
  return (
    <chakra.label
      borderRadius={"5px"}
      fontFamily={"Merriweather Sans"}
      display="flex"
      flexDirection="row"
      alignItems="center"
      maxW={"15rem"}
      h="4rem"
      w="-webkit-fill-available"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid #CCCCCC"
        w={"100%"}
        borderRadius="5px"
        h={"100%"}
        {...getCheckboxProps()}
        position="relative"
      >
        {state.isChecked && <Box w={"100%"} h={"100%"} bg="black" />}
        <Text
          position="absolute"
          color={state.isChecked ? "white" : "black"}
          {...getLabelProps()}
          fontWeight={400}
        >
          {props.name}
        </Text>
      </Flex>
    </chakra.label>
  );
};

export default CustomRegField;
