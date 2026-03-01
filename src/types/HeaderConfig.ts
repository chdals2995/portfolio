// HeaderConfig.ts

import aboutImg from "../assets/icon/4tree1.png";
import teamImg from "../assets/icon/4tree2.png";
import personalImg from "../assets/icon/4tree3.png";
import indexImg from "../assets/icon/4tree4.png";

import type { SectionType } from "./Section";

export const headerSectionConfig: Record<
  SectionType,
  {
    showTitle: boolean;
    title: string;
    image: string | null;
  }
> = {
  home: {
    showTitle: false,
    title: "",
    image: null,
  },

  about: {
    showTitle: true,
    title: "소개",
    image: aboutImg,
  },

  team: {
    showTitle: true,
    title: "팀 프로젝트",
    image: teamImg,
  },

  personal: {
    showTitle: true,
    title: "개인 프로젝트",
    image: personalImg,
  },

  index: {
    showTitle: true,
    title: "모아보기",
    image: indexImg,
  },
};