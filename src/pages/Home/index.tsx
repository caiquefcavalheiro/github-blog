import { IssuesComponent } from "./components/IssuesComponent";
import { UserInfoComponent } from "./components/UserInfoComponent";
import { HeaderContainer, SearchFormContainer } from "./styles";

export function Home() {
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
