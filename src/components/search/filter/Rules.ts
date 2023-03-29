import { useFilterStore } from "@/store/filterStore";
const filterStore = useFilterStore();

export const MINIMUM_3_CHARACTERS = "Type minimum 3 characters!";

export const keywordRule = (value: string) => {
  if (!filterStore.advanced) {
    return value.length >= 3 || MINIMUM_3_CHARACTERS;
  }
  return value.length >= 3 || value.length === 0 || MINIMUM_3_CHARACTERS;
};

export const advancedTextRule = (value: string) => {
  return (
    !filterStore.advanced ||
    value.length === 0 ||
    value.length >= 3 ||
    MINIMUM_3_CHARACTERS
  );
};

export const searchInRequiredRule = () =>
  filterStore.advanced ||
  filterStore.searchIn.name ||
  filterStore.searchIn.description ||
  filterStore.searchIn.readme ||
  "You have to choose one at least";
