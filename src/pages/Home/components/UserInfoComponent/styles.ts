import { styled } from "styled-components";

export const UserInfoContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 0.625rem;
  width: fit-content;
  max-width: 54rem;
  margin: -6rem auto 4.5rem auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  @media (min-width: 1000px) {
    div:nth-child(1) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  a {
    display: flex;
    align-items: center;

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

  @media (min-width: 1000px) {
    a {
      justify-content: center;
    }
  }
`;

export const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;

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

  @media (min-width: 1000px) {
    align-items: center;
    flex-direction: row;
  }
`;
