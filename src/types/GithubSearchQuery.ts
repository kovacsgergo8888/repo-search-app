interface SearchIn {
  name: boolean;
  description: boolean;
  readme: boolean;
}
export interface GithubSearchQuery {
  advanced: boolean;
  keyword: string;
  searchIn: SearchIn;
  page: number;
  perPage: number;
  sortBy: string;
  orderBy: string;
  username: string;
  organization: string;
  topic: string[];
  language: string[];
  starsIs: string;
  starsValue: number | null;
  starsMin: number | null;
  starsMax: number | null;
  sizeIs: string;
  sizeValue: number | null;
  sizeMin: number | null;
  sizeMax: number | null;
  createdIs: string;
  createdValue: Date | null;
  createdMin: Date | null;
  createdMax: Date | null;
}
