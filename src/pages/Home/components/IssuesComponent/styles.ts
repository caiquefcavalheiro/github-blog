import { styled } from "styled-components";

export const IssuesContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2.5rem 2rem 4rem 2rem;
  }

  li {
    height: 100%;
    cursor: pointer;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme["base-text"]};
  }

  a {
    display: block;
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: normal;
      margin: 2.5rem 0 4rem 0;
    }

    li {
      max-width: 26rem;
    }
  }
`;

export const IssuesHeader = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-items: stretch;
  gap: 1rem;
`;
