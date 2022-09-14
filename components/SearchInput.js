import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
const SearchInput = () => {
  return (
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
          w="100%"
          h="2.625rem"
          placeholder="Search"
          borderRadius={"5px"}
          bg="#F6F8FA"
          focusBorderColor="#8D91b9"
          _placeholder={{ fontWeight: "500", fontSize: "14px" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
