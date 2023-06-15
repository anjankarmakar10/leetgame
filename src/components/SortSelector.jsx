import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useApp } from "../contexts/AppProvider";
const SortSelector = () => {
  const { selectedSrot, setSelectedSort } = useApp();

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-relesed", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSrot?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem onClick={() => setSelectedSort(sort)} key={sort.value}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
