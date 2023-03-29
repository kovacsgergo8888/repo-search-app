import { defineStore } from "pinia";
import { searchRepositories } from "@/api";
import { useFilterStore } from "./filterStore";
import { useNotificationStore } from "./notificationStore";
import { Repo } from "@/types/Repo";

interface RepoStore {
  loading: boolean;
  repos: Repo[];
  totalCount: number;
}

export const useRepoStore = defineStore("repo", {
  state: (): RepoStore => ({
    loading: false,
    repos: [],
    totalCount: 0,
  }),
  getters: {
    numberOfPages: (state) => {
      const filterStore = useFilterStore();
      return Math.ceil(state.totalCount / filterStore.perPage);
    },
  },
  actions: {
    async fetchRepos() {
      const filterStore = useFilterStore();
      const notification = useNotificationStore();
      this.loading = true;
      try {
        const data = await searchRepositories(filterStore);
        this.totalCount = data.total_count;
        this.repos = data.items.map((item) => ({
          id: item.id,
          repoName: item.name,
          repoFullName: item.full_name,
          repoUrl: item.html_url,
          stars: item.stargazers_count,
          createdAt: new Date(item.created_at),
          updatedAt: new Date(item.updated_at),
          description: item.description,
          forks: item.forks_count,
          issues: item.open_issues_count,
          language: item.language,
          ownerName: item.owner.login,
          ownerPicture: item.owner.avatar_url,
          watchers: item.watchers_count,
          ownerUrl: item.owner.html_url,
        }));
      } catch (error) {
        notification.setNotification({
          message: "Owww... Some error on Github API is occured! :(",
          color: "error",
        });
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
