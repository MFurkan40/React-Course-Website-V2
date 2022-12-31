import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Logo, Nav, Image } from "./styles/Header.styled";
import StyledSwitchDiv from "./styles/SwitchDiv.styled";
import Switch from "./switch/Switch";

const Header = ({ toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledSwitchDiv>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} />
        <MoonIcon />
      </StyledSwitchDiv>
      <Container>
        <Nav>
          <Logo src="./images/logo.png" />
          <div>
            <Button color="#951556">Apply Courses</Button>
            <Button bg="#951556">Talk to Adviser</Button>
          </div>
        </Nav>

        <Flex>
          <div>
            <h1>The IT Career of Your Dreams Starts Here!</h1>
            <p>
              Clarusway is a leading international software Bootcamp. Join a
              micro class online with other trainees and learn coding skills
              with a highly-skilled instructor.
            </p>
            <Button bg="#951556">Start Your New Carier</Button>
          </div>
          <Image src="./images/hero.jpg" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
