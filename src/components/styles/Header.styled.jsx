import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 4rem 0;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    padding: 0;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 400px;
  padding: 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    width: 300px;
    padding: 0;
    text-align: center;
  }
`;

export const Nav = styled.nav`
  background: linear-gradient(to right, #951556, #ffffff);
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    background: linear-gradient(#951556, #ffffff);
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  width: 350px;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 2rem 0;
  }
`;

export const LogoSmall = styled(Logo)`
  width: 250px;
  margin-left: -40px;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.responsive}) {
    margin: 0;
  }
`;

export default StyledHeader;
