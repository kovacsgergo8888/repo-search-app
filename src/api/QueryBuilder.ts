import { GithubSearchQuery } from "@/types/GithubSearchQuery";

const advanced = (query: GithubSearchQuery, queryParts: string[]) => {
  if (query.advanced) {
    if (query.username.length) {
      queryParts.push(`user:${query.username}`);
    }
    if (query.organization.length) {
      queryParts.push(`org:${query.organization}`)
    }
    if (query.language.length) {
      query.language.forEach(language => {
        queryParts.push(`language:${language}`)
      })
    }
    if (query.topic.length) {
      query.topic.forEach(topic => {
        queryParts.push(`topic:${topic}`)
      })
    }
    if (query.starsIs === 'range' && query.starsMin !== null && query.starsMax !== null) {
      queryParts.push(`stars:${query.starsMin}..${query.starsMax}`)
    }
    if (query.starsIs !== 'range' && query.starsValue !== null) {
      queryParts.push(`stars:${query.starsIs}${query.starsValue}`)
    }
    if (query.sizeIs === "range" && query.sizeMin !== null && query.sizeMax !== null) {
      queryParts.push(`size:${query.sizeMin}..${query.sizeMax}`)
    }
    if (query.sizeIs !== "range" && query.sizeValue !== null) {
      queryParts.push(`size:${query.sizeValue}`)
    }
    if (query.createdValue || query.createdMin || query.createdMax) {
      if (query.createdIs === 'range') {
        queryParts.push(`created:${query.createdMin?.toISOString()}..${query.createdMax?.toISOString()}`)
      } else {
        queryParts.push(`created:${query.createdIs}${query.createdValue?.toISOString()}`)
      }
    }
  }
};

export const buildQuery = (query: GithubSearchQuery): string => {
  const queryParts = [];
  if (query.keyword.length) {
    queryParts.push(query.keyword);
    const search: { [key: string]: boolean } = { ...query.searchIn };
    for (const key in search) {
      if (search[key]) {
        queryParts.push(`in:${key}`);
      }
    }
  }

  advanced(query, queryParts);
  const searchParams = new URLSearchParams({
    q: queryParts.join(" "),
    page: query.page.toString(),
    per_page: query.perPage.toString(),
    sort: query.sortBy,
    order: query.orderBy,
  });
  return searchParams.toString();
};
