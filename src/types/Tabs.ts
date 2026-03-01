// Tabs.ts

export type TabType = "about" | "team" | "personal" | "index";

export interface TabItem {
  key: TabType;
  label: string;
}

export const tabs: TabItem[] = [
  { key: "about", label: "소개" },
  { key: "team", label: "팀 프로젝트" },
  { key: "personal", label: "개인 프로젝트" },
  { key: "index", label: "모아보기" },
];