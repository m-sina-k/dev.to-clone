import { useState, useEffect } from "react";

export default function useReadingTime(text, wordsPerMinute = 256) {
  const [wordsCount, setWordsCount] = useState(null);

  useEffect(() => {
    const words = text.split(' ').length;
    setWordsCount(words);
  }, [text]);

  if (wordsCount)
    return {
      readingTime: Math.ceil(wordsCount / wordsPerMinute),
    };
}
