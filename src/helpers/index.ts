import { PostType, SortType } from "types/types";

export const sortPostArray = (filter: SortType, array: PostType[], defaultArray: PostType[]) => {
  switch (filter) {
    case SortType.relevant:
      return defaultArray;
    case SortType.newest:
      return [...array].sort(
        (a, b) =>
          new Date(b.postDetails.publishDate).valueOf() -
          new Date(a.postDetails.publishDate).valueOf()
      );

    case SortType.popular:
      return [...array].sort(
        (a, b) =>
          b.reactions.hearts.length +
          b.reactions.unicorns.length -
          (a.reactions.hearts.length + a.reactions.unicorns.length)
      );
  }
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
