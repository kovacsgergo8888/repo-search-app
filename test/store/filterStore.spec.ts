import { describe, test, vi, beforeEach, expect } from "vitest";
import { useFilterStore } from "../../src/store/filterStore";
import { setActivePinia, createPinia } from "pinia";
import { defaultState } from "./filterStore.fixtures";

describe("Test filter store", () => {
  let filterStore;
  beforeEach(() => {
    setActivePinia(createPinia());
    filterStore = useFilterStore();
  });

  test.each([
    [{ ...defaultState }, false],
    [{ ...defaultState, advanced: true }, false],
    [{ ...defaultState, advanced: true, keyword: "" }, false],
    [{ ...defaultState, advanced: true, keyword: "something" }, true],
    [{ ...defaultState, advanced: true, language: ["javascript"] }, true],
    [{ ...defaultState, advanced: true, topic: ["something"] }, true],
    [{ ...defaultState, advanced: true, username: "somebody" }, true],
    [{ ...defaultState, advanced: true, organization: "company" }, true],
    [{ ...defaultState, advanced: true, sizeValue: 123 }, true],
    [{ ...defaultState, advanced: true, starsValue: 123 }, true],
    [{ ...defaultState, advanced: true, sizeMin: 123 }, true],
    [{ ...defaultState, advanced: true, starsMin: 123 }, true],
    [{ ...defaultState, advanced: true, createdValue: new Date("2020-1-1") }, true],
  ])("is any input used", (state, expected) => {
    filterStore.$patch(state);
    expect(filterStore.isAnyInputUsed).toBe(expected);
  });
});
