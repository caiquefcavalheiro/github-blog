import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SocialInfo, UserInfo, UserInfoContainer } from "./styles";
import { FaGithub } from "react-icons/fa";
import { BsBuildingFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "../../../../context/GithubContext";

export function UserInfoComponent() {
  const userInfo = useContextSelector(GithubContext, (context) => {
    return context.githubUser;
  });

  const { html_url, bio, avatar_url, company, followers, login, name } =
    userInfo;

  return (
    <UserInfoContainer>
      <img src={avatar_url} alt="" />
      <UserInfo>
        <div>
          <h3>{name}</h3>
          <a href={html_url} target="_blank">
            GITHUB <FaArrowUpRightFromSquare />
          </a>
        </div>
        <p>{bio}</p>
        <SocialInfo>
          <p>
            <FaGithub />
            {login}
          </p>
          <p>
            <BsBuildingFill />
            {company ? company : "Open to work"}
          </p>
          <p>
            <HiUsers />
            {followers} seguidores
          </p>
        </SocialInfo>
      </UserInfo>
    </UserInfoContainer>
  );
}
