import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;

  background-image: url("../src/assets/background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PostHeaderContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 0.625rem;
  max-width: 54rem;
  width: 95vw;
  margin: -6rem auto 4.5rem auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["brand-blue"]};
    text-decoration: none;

    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    cursor: pointer;

    &:hover {
      transition: border 0.2s;
      border-bottom: 1px solid ${(props) => props.theme["brand-blue"]};
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  svg {
    font-size: 18px;
    color: ${(props) => props.theme["base-label"]};
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const PostContent = styled.div`
  max-width: 54rem;
  width: 90vw;
  margin: 0 auto 4rem auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;

  color: ${(props) => props.theme["base-text"]};

  p img {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  p {
    align-self: center;
  }

  a {
    color: ${(props) => props.theme["brand-blue"]};
  }

  pre {
    display: none;
    background: ${(props) => props.theme["base-post"]};
    padding: 1rem;
  }

  @media (min-width: 720px) {
    pre {
      display: block;
    }
  }
`;
