import { faker } from "@faker-js/faker";
import { News } from "../models/News";

export const generateNewsData = (): News[] => {
  return Array.from({ length: 20 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.hacker
      .phrase()
      .replace(/^./, (letter) => letter.toUpperCase()),
    author: faker.name.fullName(),
    category: faker.helpers.arrayElement([
      "World",
      "Technology",
      "Sports",
      "Entertainment",
    ]),
    description: faker.lorem.paragraph(),
    date: faker.date.recent().toLocaleDateString(),
  }));
};
