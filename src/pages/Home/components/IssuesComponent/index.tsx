import { useContextSelector } from "use-context-selector";
import { IssuesContainer, IssuesHeader } from "./styles";
import { GithubContext } from "../../../../context/GithubContext";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function IssuesComponent() {
  const issues = useContextSelector(GithubContext, (context) => {
    return context.githubIssues;
  });

  return (
    <IssuesContainer>
      <ul>
        {issues.map((issue) => {
          return (
            <NavLink key={issue.id} to={`/post/${issue.id}`} title="post">
              <li>
                <IssuesHeader>
                  <h3>{issue.title}</h3>
                  <span>
                    {formatDistanceToNow(new Date(issue.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </IssuesHeader>
                <p>{issue.body}</p>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </IssuesContainer>
  );
}
