import { useContextSelector } from "use-context-selector";
import { IssuesComponent } from "./components/IssuesComponent";
import { UserInfoComponent } from "./components/UserInfoComponent";
import { HeaderContainer, SearchFormContainer } from "./styles";
import { GithubContext } from "../../context/GithubContext";
import { useCallback, useEffect, useState } from "react";

export function Home() {
  const [searchInput, setSearchInput] = useState("");

  const { searchRequest, issues } = useContextSelector(
    GithubContext,
    (context) => {
      return {
        searchRequest: context.fetchGetSearchIssues,
        issues: context.githubIssues,
      };
    }
  );

  const handleSearch = useCallback(async () => {
    if (searchInput) {
      await searchRequest(searchInput);
    } else {
      await searchRequest();
    }
  }, [searchRequest, searchInput]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timeout);
  }, [handleSearch, searchInput]);

  return (
    <div>
      <HeaderContainer />
      <UserInfoComponent />
      <SearchFormContainer>
        <div>
          <h4>Publicações</h4>
          <p>{issues.length} publicações</p>
        </div>
        <input
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
          type="text"
          placeholder="Buscar conteúdo"
        />
      </SearchFormContainer>
      <IssuesComponent />
    </div>
  );
}
