import { UserAnswer } from "./types";

export let userAnswers: UserAnswer[] = [];

export const clearUserAnswers = () => {
  userAnswers.length = 0;
};
