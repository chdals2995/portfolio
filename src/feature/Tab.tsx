// Tab.tsx

import { tabs } from "../types/tabs";
import type { TabType } from "../types/tabs";

interface HeaderProps {
  currentSection: TabType;
}

export default function Tab({ currentSection }: HeaderProps) {
  return (
    <div className="absolute w-full bottom-24.5">
      <ul
        className="w-394 h-24.5 border-5 border-[#FFC4D7] rounded-4xl bg-[#FFC4D7]
        bg-linear-to-b from-[#FFD0DF] via-[#FFD0DF] to-[#FFF]
        flex justify-around items-center mx-auto"
      >
        {tabs.map((tab, index) => {
          const isActive = currentSection === tab.key;

          return (
            <li
              key={tab.key}
              className={`
                flex-1 h-full
                ${index === 0 ? "rounded-l-4xl" : ""}
                ${index === tabs.length - 1 ? "rounded-r-4xl" : ""}
                ${index !== 0 ? "border-l-5 border-[#FFC4D7]" : ""}
                hover:bg-linear-to-b from-[#FFFEDD] via-[#FFFEDD] to-[#FFF]
                ${isActive ? "bg-[#FFFEDD]" : ""}
              `}
            >
              <button className="text-5xl w-full h-full cursor-pointer">
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}