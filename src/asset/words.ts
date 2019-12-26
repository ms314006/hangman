const generateWords = (): string[] => (
  new Array(26).fill(undefined).map((v, i) => String.fromCharCode(i + 65))
);

const words: string[] = generateWords();

export default words;
