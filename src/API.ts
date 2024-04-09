import { shuffleArray } from "./utils";
export enum Difficulty{
    EASY='easy',
    MEDIUM='medium',
    HARD='hard'
}

export type Question={
    category: string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    Question:string;
    type:string
}
export type QuestionState=Question &{answers:string[]}

export const fetchQuizQuestions = async (amount: number, difficult: Difficulty) => {
    try {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficult}&type=multiple`;
        const response = await fetch(endpoint);
        
        if (!response.ok) {
            throw new Error('Failed to fetch quiz questions');
        }

        const data = await response.json();
        console.log(data);
        return data.results.map((question: Question) => ({
            ...question,
            answer: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }));
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
        throw error;
    }
};