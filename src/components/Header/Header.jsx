import { Container, Text } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import LoginNav from 'components/LoginNav/LoginNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setFontsize = () => {
    return isLargerThan600 ? '6xl' : '3xl';
  };
  const navigate=useNavigate()
const handleNavigate = () => {
  navigate('/', { replace: true });
};
  return (
    <header
      style={{
        backgroundColor: '#3182ce',
        position: 'fixed',
        top: 0,
        width: '100%',
        
      }}
    >
      <Container
        borderTopRadius="none"
        borderBottomRadius="lg"
        maxW="1000px"
        color="white"
      >
        <Flex alignItems="center">
          <Text _hover={{textShadow:' 4px 4px 2px rgba(0,0,0,0.6)'}} transition='250ms linear' fontSize={setFontsize()} cursor='pointer' onClick={handleNavigate}>Phonebook</Text>

          <Spacer />
          {isLoggedIn ? <UserMenu  size={isLargerThan600} /> : <LoginNav />}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
