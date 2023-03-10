import styled from "styled-components";

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.responsive}) {
    padding: 0;
  }
`;

export default Container;
