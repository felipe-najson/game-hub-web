import { HStack, Icon, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Icon as={MdLightMode} color="gray.500" />
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <Icon as={MdDarkMode} color="gray.500" />
    </HStack>
  );
};

export default ColorModeSwitch;
