import SocialIcons from "./SocialIcons";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";
import StyledFooter from "./styles/Footer.styled";
import { LogoSmall } from "./styles/Header.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <LogoSmall src="./images/logo.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</li>
            <li> +1 (571) 360 66 77</li>
            <li>contact@clarusway.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
