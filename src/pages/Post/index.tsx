import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
  FaGithub,
} from "react-icons/fa6";
import {
  HeaderContainer,
  PostContent,
  PostHeaderContainer,
  PostInfo,
} from "./styles";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

export function Post() {
  return (
    <>
      <HeaderContainer />
      <PostHeaderContainer>
        <div>
          <a href="#">
            <MdOutlineArrowBackIosNew />
            VOLTAR
          </a>
          <a href="#" target="_blank">
            GITHUB <FaArrowUpRightFromSquare />
          </a>
        </div>
        <p>JavaScript data types and data structures</p>
        <PostInfo>
          <p>
            <FaGithub />
            cameronwll
          </p>
          <p>
            <FaCalendarDay />
            Há 1 dia
          </p>
          <p>
            <FaComment />5 comentários
          </p>
        </PostInfo>
      </PostHeaderContainer>
      <PostContent>
        {/* React-MarkDown */}
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostContent>
    </>
  );
}
