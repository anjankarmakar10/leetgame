import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav>
      <HStack padding={"10px"}>
        <Image
          boxSize={"60px"}
          src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </nav>
  );
};

export default Navbar;
