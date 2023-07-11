import { styled } from "styled-components";

export const IssuesContainer = styled.div`
  margin: 3rem auto 0 auto;
  max-width: 54rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  li {
    list-style-type: none;
    width: 26rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 0.625rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const IssuesHeader = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
`;
