import { useState } from 'react';
import questions from '../asset/questions';
import random from '../utils/random';

const questionRandom = () => {
  const questionIndex = random.getRandomOfRange(0, questions.length - 1);
  return questions[questionIndex];
};

const useQuestion = () => {
  const [question, setQuestion] = useState(questionRandom().answer.split(''));
  const [answered, setAnswered] = useState([]);

  const updateAnsweredProgress = (targetWord: string) => {
    setAnswered((prevAnswered: string[]) => [...prevAnswered, targetWord]);
  };

  const resetAnsweresAndQuestion = (): void => {
    setAnswered([]);
    setQuestion(questionRandom().answer.split(''));
  };

  return [question, answered, updateAnsweredProgress, resetAnsweresAndQuestion];
};

export default useQuestion;
