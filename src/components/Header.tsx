"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation("default");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const intervalRefs = useRef<(NodeJS.Timeout | null)[]>([]);

  const handleMouseOver = useCallback(
    (element: HTMLElement, index: number) => {
      let iteration = 0;

      if (intervalRefs.current[index]) {
        clearInterval(intervalRefs.current[index]!);
      }

      intervalRefs.current[index] = setInterval(() => {
        element.innerText = element.dataset
          .value!.split("")
          .map((letter, idx) => {
            if (idx < iteration) {
              return element.dataset.value![idx];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= element.dataset.value!.length) {
          if (intervalRefs.current[index]) {
            clearInterval(intervalRefs.current[index]!);
          }
        }

        iteration += 1 / 3;
      }, 20);
    },
    [letters]
  );

  useEffect(() => {
    const liElements = liRefs.current;
    const intervals = intervalRefs.current;
    liElements.forEach((li, index) => {
      if (li) {
        li.addEventListener("mouseover", () => handleMouseOver(li, index));
      }
    });

    return () => {
      liElements.forEach((li, index) => {
        if (li) {
          li.removeEventListener("mouseover", () => handleMouseOver(li, index));
        }
      });
      intervals.forEach((interval) => {
        if (interval) {
          clearInterval(interval!);
        }
      });
    };
  }, [handleMouseOver]);

  return (
    <nav className="flex items-center justify-between px-48 py-4 font-monospace text-white">
      <a
        href="/"
        className="flex items-center gap-1 text-2xl list-none cursor-pointer"
      >
        <li
          ref={(el) => {
            liRefs.current[0] = el;
          }}
          data-value={t("logo-1")}
          className="flex items-center gap-1"
        >
          {t("logo-1")}
        </li>
      </a>
      <ul className="flex space-x-10 text-2xl">
        <li
          className="cursor-pointer"
          ref={(el) => {
            liRefs.current[1] = el;
          }}
          data-value={t("Sobre")}
        >
          <a href="/">{t("Sobre")}</a>
        </li>
        <li
          className="cursor-pointer"
          ref={(el) => {
            liRefs.current[2] = el;
          }}
          data-value={t("Projetos")}
        >
          <a href="/about">{t("Projetos")}</a>
        </li>
        <li
          className="cursor-pointer"
          ref={(el) => {
            liRefs.current[3] = el;
          }}
          data-value={t("Contato")}
        >
          <a href="/contact">{t("Contato")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
