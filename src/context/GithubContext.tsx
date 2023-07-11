import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../api/axios";

interface GithubProviderProps {
  children: ReactNode;
}

interface GithubUserProps {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  company: string;
  followers: number;
}

interface GithubIssuesProps {
  id: number;
  url: string;
  title: string;
  createdAt: string;
  body: string;
  comments: string;
}

interface GithubContextType {
  githubUser: GithubUserProps;
  githubIssues: GithubIssuesProps[];
  fetchGetSearchIssues: (searchInput: string) => Promise<void>;
}

export const GithubContext = createContext<GithubContextType>(
  {} as GithubContextType
);

export function GithubProvider({ children }: GithubProviderProps) {
  const [githubUser, setGithubUser] = useState<GithubUserProps>(
    {} as GithubUserProps
  );
  const [githubIssues, setGithubIssues] = useState<GithubIssuesProps[]>(
    [] as GithubIssuesProps[]
  );

  const fetchGetUser = useCallback(async () => {
    const response = await api.get("users/caiquefcavalheiro");
    setGithubUser(response.data as GithubUserProps);
  }, []);

  const fetchGetReposIssues = useCallback(async () => {
    const response = await api.get(
      "repos/rocketseat-education/reactjs-github-blog-challenge/issues"
    );
    setGithubIssues(response.data as GithubIssuesProps[]);
  }, []);

  const fetchGetSearchIssues = useCallback(async (searchInput: string) => {
    const fixSearchInput = searchInput.replace(" ", "%20").trim();

    const response = await api.get("https://api.github.com/search/issues", {
      params: {
        q: `?q=${fixSearchInput}repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    });

    setGithubIssues(response.data.items as GithubIssuesProps[]);
  }, []);

  useEffect(() => {
    fetchGetUser();
    fetchGetReposIssues();
  }, []);

  return (
    <GithubContext.Provider
      value={{ githubUser, githubIssues, fetchGetSearchIssues }}>
      {children}
    </GithubContext.Provider>
  );
}
