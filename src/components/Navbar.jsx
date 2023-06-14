import { HStack, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav>
      <HStack>
        <Image
          boxSize={"60px"}
          src="https://game-hub-phi.vercel.app/assets/logo-ff4914e6.webp"
        />
      </HStack>
    </nav>
  );
};

export default Navbar;
