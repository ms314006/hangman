import { useState } from 'react';
import questions from '../asset/questions';
import random from '../utils/random';

const useQuestion = () => {
  const questionIndex = random.getRandomOfRange(0, questions.length - 1);
  const targetQuestion = questions[questionIndex];

  const [question, setQuestion] = useState(targetQuestion.answer.split(''));
  const [answered, setAnswered] = useState([]);

  const updateAnsweredProgress = (targetWord: string) => {
    setAnswered((prevAnswered: string[]) => [...prevAnswered, targetWord]);
  };

  return [question, answered, updateAnsweredProgress];
};

export default useQuestion;
