import { useContextSelector } from "use-context-selector";
import { IssuesContainer, IssuesHeader } from "./styles";
import { GithubContext } from "../../../../context/GithubContext";

export function IssuesComponent() {
  const issues = useContextSelector(GithubContext, (context) => {
    return context.githubIssues;
  });

  return (
    <IssuesContainer>
      <ul>
        {issues.map((issue) => {
          return (
            <li key={issue.id}>
              <IssuesHeader>
                <h3>{issue.title}</h3>
                <span>{issue.createdAt}</span>
              </IssuesHeader>
              <p>{issue.body}</p>
            </li>
          );
        })}
      </ul>
    </IssuesContainer>
  );
}
