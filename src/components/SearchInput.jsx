import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useApp } from "../contexts/AppProvider";

const SearchInput = () => {
  const ref = useRef();
  const { setSearchValue } = useApp();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const value = ref.current.value;
        setSearchValue(value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
