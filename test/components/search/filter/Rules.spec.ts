import {
  keywordRule,
  MINIMUM_3_CHARACTERS,
} from "../../../../src/components/search/filter/Rules";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useFilterStore } from "../../../../src/store/filterStore";
vi.mock("../../../../src/store/filterStore")

describe.skip("Test validation rules", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  describe("keyword tests", () => {
    it("should 3 characters simple search", () => {
      // this mocking doesn't wanna work yet :(
      useFilterStore.mockImplementation(() => ({advanced: false}))
      expect(keywordRule("")).toBe(MINIMUM_3_CHARACTERS);
      expect(keywordRule("12")).toBe(MINIMUM_3_CHARACTERS);
      expect(keywordRule("123")).toBe(true);
    });
    it("should allow empty at advanced search", async () => {
      useFilterStore
      expect(keywordRule("")).toBe(true);
      expect(keywordRule("1")).toBe(MINIMUM_3_CHARACTERS);
      expect(keywordRule("12")).toBe(MINIMUM_3_CHARACTERS);
    });
  });
});
