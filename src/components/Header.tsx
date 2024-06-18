"use client";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation("default");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const h1 = h1Ref.current;

    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (h1) {
          h1.innerText = h1.dataset
            .value!.split("")
            .map((letter, index) => {
              if (index < iteration) {
                return h1.dataset.value![index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= h1.dataset.value!.length) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }

          iteration += 1 / 3;
        }
      }, 20);
    };

    h1?.addEventListener("mouseover", handleMouseOver);

    return () => {
      h1?.removeEventListener("mouseover", handleMouseOver);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen grid place-items-center overflow-hidden m-0">
      <h1
        data-value={t("hello")}
        ref={h1Ref}
        className="font-monospace text-black text-center py-0 text-3xl"
      >
        {t("hello")}
      </h1>
    </div>
  );
};

export default Header;
