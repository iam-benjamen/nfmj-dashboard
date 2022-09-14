import { Box, useCheckbox, chakra, Flex, Text } from "@chakra-ui/react";

const CustomCheckBox = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      w="100%"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={"space-between"}
      bg="white"
      border="1px solid"
      borderColor="#EEEEEE"
      borderRadius={"5px"}
      pl="18px"
      pr="12px"
      py={"12.5px"}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Text
        color="black"
        fontSize={"1rem"}
        fontWeight={400}
        {...getLabelProps()}
      >
        {props.text}
      </Text>
      <Flex
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        rounded={"full"}
        borderColor={state.isChecked ? "#CA251C" : "#D1DAE6"}
        w={"18px"}
        h={"18px"}
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Box rounded={"full"} w={"14px"} h={"14px"} bg="#CA251C" />
        )}
      </Flex>
    </chakra.label>
  );
};

export default CustomCheckBox;
