export interface Repo {
  id: number;
  repoName: string;
  repoFullName: string;
  repoUrl: string;
  stars: number;
  watchers: number;
  forks: number;
  issues: number;
  description: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
  ownerName: string;
  ownerPicture: string;
  ownerUrl: string;
}
