import { useState } from 'react';
import questions from '../asset/questions';
import random from '../utils/random';

const findTargetIndexFromAnswer = (answer: any, targetWord: string) => (
  answer.findIndex(
    ({ word, answered }: { word: string, answered: boolean }) => (
      word === targetWord && !answered
    ),
  )
);

const useQuestion = () => {
  const questionIndex = random.getRandomOfRange(0, questions.length - 1);
  const targetQuestion = questions[questionIndex];
  const answerWords = targetQuestion.answer.split('');
  const answerProgress = answerWords.map(word => ({
    word,
    answered: false,
  }));

  const [answer, setAnswer] = useState(answerProgress);

  const updateAnsweredProgress = (targetWord: string) => {
    setAnswer((prevAnswer) => {
      let wordIndex = findTargetIndexFromAnswer(prevAnswer, targetWord);
      if (wordIndex === -1) return prevAnswer;

      const newAnswer = prevAnswer.map(word => ({ ...word }));
      while (wordIndex !== -1) {
        newAnswer.splice(wordIndex, 1, { word: targetWord, answered: true });
        wordIndex = findTargetIndexFromAnswer(newAnswer, targetWord);
      }
      return newAnswer;
    });
  };

  return [answer, updateAnsweredProgress];
};

export default useQuestion;
