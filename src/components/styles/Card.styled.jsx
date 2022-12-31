import styled from "styled-components";

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  padding: 4rem;
  margin: 3rem 0;
  flex-direction: ${({ odd }) => odd || "row"};
  img {
    width: 100%;
  }

  & > div {
    /*Tüm elemanların buyumesine izin ver*/
    flex-grow: 1;
    /* Tüm div'lerin eşit miktarda alan tutabilmesine izin ver.*/
    flex-basis: 0;
  }
  @media (max-width: ${({ theme }) => theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledCard;
