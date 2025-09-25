import animeQuestions from "./animeQuestions";
import japaneseQuestions from "./japaneseQuestions";

const allQuestions = [...animeQuestions, ...japaneseQuestions];
export type Question = (typeof allQuestions)[0];

export default allQuestions;
