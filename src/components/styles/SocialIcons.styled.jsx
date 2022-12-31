import styled from "styled-components";

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.footerFontColor};
    border: 1px solid ${({ theme }) => theme.colors.footerFontColor};
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-right: 12px;
  }
`;

export default StyledSocialIcons;
