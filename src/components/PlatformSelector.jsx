import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { useApp } from "../contexts/AppProvider";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const { selectedPlatform, setSelectedPlatform } = useApp();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform)}
            key={platform?.id}
          >
            {platform?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
