import { GithubSearchQuery } from "@/types/GithubSearchQuery";
import { buildQuery } from "./QueryBuilder";
import axios from "axios";
import { GithubApiResponse } from "./Types";

const api = axios.create({
  baseURL: "https://api.github.com"
});

export const searchRepositories = async (query: GithubSearchQuery) => {
  const queryString = buildQuery(query);
  const response = await api.get<Promise<GithubApiResponse>>(
    `/search/repositories?${queryString}`
  );
  return response.data;
};
