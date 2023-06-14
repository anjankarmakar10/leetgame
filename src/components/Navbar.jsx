import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <nav>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image
          boxSize={"60px"}
          src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
        />
        <ColorModeSwitch />
      </HStack>
    </nav>
  );
};

export default Navbar;
