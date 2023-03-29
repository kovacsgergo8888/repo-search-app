import { describe, vi, it, expect } from "vitest";
import {buildQuery} from "../../src/api/QueryBuilder"

let query;

describe("Test query builder", () => {
  it("should build a simple query", () => {
     query = {
      advanced: false,
      keyword: "something",
      page: 1,
      perPage: 10,
      sortBy: "default",
      orderBy: "asc",
      searchIn: {
        name: true
      }
    }

    expect(buildQuery(query)).toBe("q=something+in%3Aname&page=1&per_page=10&sort=default&order=asc")
  })

  it("should search in multiple things", () => {
     query = {
      advanced: false,
      keyword: "something",
      page: 1,
      perPage: 10,
      sortBy: "default",
      orderBy: "asc",
      searchIn: {
        readme: false,
        name: true,
        description: true,
      }
    }

    expect(buildQuery(query)).toBe("q=something+in%3Aname+in%3Adescription&page=1&per_page=10&sort=default&order=asc")
  })

  it("should build advanced search query", () => {
     query = {
      advanced: true,
      keyword: "something",
      page: 1,
      perPage: 10,
      sortBy: "default",
      orderBy: "asc",
      searchIn: {
        readme: false,
        name: true,
        description: true,
      },
      username: "some body",
      organization: "company",
      language: ["javascript"],
      topic: ["topic"],
      starsIs: ">=",
      starsValue: 100,
      sizeIs: ">=",
      sizeValue: 200
    }
    expect(buildQuery(query)).toBe("q=something+in%3Aname+in%3Adescription+user%3Asome+body+org%3Acompany+language%3Ajavascript+topic%3Atopic+stars%3A%3E%3D100+size%3A200&page=1&per_page=10&sort=default&order=asc")
  })

  it("should build advanced by range inputs", () => {
    query = {
      advanced: true,
      keyword: "something",
      page: 1,
      perPage: 10,
      sortBy: "default",
      orderBy: "asc",
      searchIn: {
        readme: false,
        name: true,
        description: true,
      },
      username: "some body",
      organization: "company",
      language: ["javascript"],
      topic: ["topic"],
      starsIs: "range",
      starsMin: 2,
      starsMax: 5,
      sizeIs: "range",
      sizeMin: 5,
      sizeMax: 50,
      createdIs: "range",
      createdMin: new Date("2020-02-02"),
      createdMax: new Date("2022-12-12")
    }
    expect(buildQuery(query)).toBe("q=something+in%3Aname+in%3Adescription+user%3Asome+body+org%3Acompany+language%3Ajavascript+topic%3Atopic+stars%3A2..5+size%3A5..50+created%3A2020-02-02T00%3A00%3A00.000Z..2022-12-12T00%3A00%3A00.000Z&page=1&per_page=10&sort=default&order=asc")
  })
})