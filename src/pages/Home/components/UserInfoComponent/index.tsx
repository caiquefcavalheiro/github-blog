import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SocialInfo, UserInfo, UserInfoContainer } from "./styles";
import { FaGithub } from "react-icons/fa";
import { BsBuildingFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import avatar from "../../../../assets/avatar.png";

export function UserInfoComponent() {
  return (
    <UserInfoContainer>
      <img src={avatar} alt="" />
      <UserInfo>
        <div>
          <h3>Cameron Williamson</h3>
          <a href="#" target="_blank">
            GITHUB <FaArrowUpRightFromSquare />
          </a>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SocialInfo>
          <p>
            <FaGithub />
            cameronwll
          </p>
          <p>
            <BsBuildingFill />
            Rocketseat
          </p>
          <p>
            <HiUsers />
            32 seguidores
          </p>
        </SocialInfo>
      </UserInfo>
    </UserInfoContainer>
  );
}
