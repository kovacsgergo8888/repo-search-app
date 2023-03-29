export interface GithubOwner {
  avatar_url: string
  login: string
  html_url: string
}

export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  owner: GithubOwner;
  forks_count: number;
  watchers_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  language: string;
  description: string;
  open_issues_count: number;
  html_url: string;
}

export interface GithubApiResponse {
  total_count: number;
  items: GithubRepo[];
}
