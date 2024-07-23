"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const WritingWords: React.FC = () => {
  const { t } = useTranslation();
  const words = useMemo(() => [t("word1"), t("word2"), t("word3"), t("word4")], [t]);

  const spanRef = useRef<HTMLSpanElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const span = spanRef.current;

    const animateText = (word: string) => {
      let iteration = 0;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (span) {
          span.innerText = word
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return word[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= word.length) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            setTimeout(() => {
              setCurrentWordIndex(
                (prevIndex) => (prevIndex + 1) % words.length
              );
            }, 1500);
          }

          iteration += 1 / 3;
        }
      }, 30);
    };

    animateText(words[currentWordIndex]);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentWordIndex, words]);

  return (
    <div className="font-mono text-white text-[42px] flex items-center">
      <p>
        <span>{t("hero-subtitle")}</span>{" "}
        <span ref={spanRef}>{words[currentWordIndex]}</span>
      </p>
    </div>
  );
};

export default WritingWords;
