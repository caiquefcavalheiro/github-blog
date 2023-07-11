import { HeaderContainer } from "./styles";
import avatar from "../../assets/avatar.png";
import { FaGithub } from "react-icons/fa";
import { BsBuildingFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export function Home() {
  return (
    <>
      <HeaderContainer />
      <div>
        <img src={avatar} alt="" />
        <div>
          <h3>Cameron Williamson</h3>
          <a>
            GITHUB <FaArrowUpRightFromSquare />
          </a>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div>
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
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
      <div>
        <ul>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </li>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </li>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </li>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </li>
          <li>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
