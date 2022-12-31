import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.footerFontColor};
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.responsive}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;

export default StyledFooter;
