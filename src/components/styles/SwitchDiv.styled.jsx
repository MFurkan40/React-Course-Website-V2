import styled from "styled-components";

const StyledSwitchDiv = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    position: absolute;
  }
`;

export default StyledSwitchDiv;
