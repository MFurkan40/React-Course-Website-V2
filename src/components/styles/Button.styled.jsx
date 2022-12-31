import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "#ffffff"};
  color: ${({ color }) => color || "#ffffff"};
  border: 1px solid #951556;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  margin: 2rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all linear 0.25s;
  &:hover {
    opacity: 0.85;
    transform: scale(0.95);
  }
`;

export default Button;
