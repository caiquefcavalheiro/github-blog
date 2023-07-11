import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
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
  width: fit-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-label"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 0.375rem;
    width: 100%;
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

  @media (min-width: 1000px) {
    width: auto;

    div {
      flex-direction: row;
    }

    input {
    }
  }
`;
