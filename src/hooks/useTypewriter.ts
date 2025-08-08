import { useEffect, useRef, useState } from "react";

export function useTypewriter(words: string[], speed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const wordRef = useRef(words[0] ?? "");

  useEffect(() => {
    wordRef.current = words[index] ?? "";
  }, [index, words]);

  useEffect(() => {
    if (!wordRef.current) return;
    if (subIndex === wordRef.current.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, speed, pause]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 450);
    return () => clearInterval(blinkInterval);
  }, []);

  return {
    text: wordRef.current.slice(0, subIndex),
    blink,
  };
}
