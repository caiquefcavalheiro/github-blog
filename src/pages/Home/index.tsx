import { useContextSelector } from "use-context-selector";
import { IssuesComponent } from "./components/IssuesComponent";
import { UserInfoComponent } from "./components/UserInfoComponent";
import { HeaderContainer, SearchFormContainer } from "./styles";
import { GithubContext } from "../../context/GithubContext";

export function Home() {
  const searchRequest = useContextSelector(GithubContext, (context) => {
    return context.fetchGetSearchIssues;
  });

  return (
    <>
      <HeaderContainer />
      <UserInfoComponent />
      <SearchFormContainer>
        <div>
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchFormContainer>
      <IssuesComponent />
    </>
  );
}
