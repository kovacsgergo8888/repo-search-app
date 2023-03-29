import { defineStore } from "pinia";
export const useFilterStore = defineStore("filter", {
  state: () => ({
    advanced: false,
    keyword: "",
    searchIn: {
      name: true,
      description: false,
      readme: false,
    },
    page: 1,
    perPage: 10,
    sortBy: 'default',
    orderBy: 'asc',
    language: [],
    topic: [],
    username: '',
    organization: '',
    starsIs: '>=',
    starsValue: null,
    starsMin: null,
    starsMax: null,
    sizeIs: '>=',
    sizeValue: null,
    sizeMin: null,
    sizeMax: null,
    createdIs: '<=',
    createdValue: null,
    createdMin: null,
    createdMax: null
  }),
  actions: {
    toggleAdvanced () {
      this.advanced = !this.advanced
    }
  },
  getters: {
    isAdvanced: (state) => state.advanced,
    areTextInputsUsed: (state) => [state.keyword, state.username, state.organization].some((input: string) => input.length > 0),
    areCollectionInputsUsed: (state) => [state.language, state.topic].some((input: string[]) => input.length > 0),
    isSizeInputUsed: (state) => (state.sizeValue !== null || state.sizeMin !== null || state.sizeMax !== null),
    isStarsInputUsed: (state) => (state.starsValue !== null || state.starsMin !== null || state.starsMax !== null),
    isCreatedInputUsed: (state) => (state.createdValue !== null || state.createdMin !== null || state.createdMax !== null),
    isAnyInputUsed () {
      if (this.isAdvanced) {
        return this.areTextInputsUsed ||
        this.areCollectionInputsUsed ||
        this.isSizeInputUsed ||
        this.isStarsInputUsed ||
        this.isCreatedInputUsed
      }
      return false;
    }
  }
});
