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
import { useParams } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { GithubContext } from "../../context/GithubContext";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post() {
  const { id } = useParams();

  const { user, issues } = useContextSelector(GithubContext, (context) => {
    return { issues: context.githubIssues, user: context.githubUser };
  });

  const findIssueById = issues.find((issue) => issue.id === Number(id));

  return (
    <>
      <HeaderContainer />
      {findIssueById && (
        <>
          <PostHeaderContainer>
            <div>
              <a href="/">
                <MdOutlineArrowBackIosNew />
                VOLTAR
              </a>
              <a href={user.html_url} target="_blank">
                GITHUB <FaArrowUpRightFromSquare />
              </a>
            </div>
            <p>{findIssueById?.title}</p>
            <PostInfo>
              <p>
                <FaGithub />
                {user.login}
              </p>
              <p>
                <FaCalendarDay />
                {formatDistanceToNow(new Date(findIssueById.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </p>
              <p>
                <FaComment />
                {findIssueById?.comments} comentários
              </p>
            </PostInfo>
          </PostHeaderContainer>
          <PostContent>
            {findIssueById && (
              <ReactMarkdown
                children={findIssueById.body}
                remarkPlugins={[remarkGfm]}
              />
            )}
          </PostContent>
        </>
      )}
    </>
  );
}
