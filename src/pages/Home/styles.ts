import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  width: 100vw;
  margin: 0 auto;

  background-image: url("./src/assets/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
  margin: 0 auto;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  input {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 0.375rem;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;
