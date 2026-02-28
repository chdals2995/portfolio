// Header.tsx

import HomeIcon from "../assets/icon/4outhome.png"
import { headerSectionConfig } from "../types/HeaderConfig";
import type { Project } from "../types/Project";

// 풀페이지 섹션 설정
type SectionType =
  | "home"
  | "about"
  | "team"
  | "personal"
  | "index";

// 헤더 시각화 조건 설정
type HeaderProps = {
  currentSection: SectionType;
  currentProject: Project| null;
};



export default function Header({
    currentSection, currentProject,
}: HeaderProps){

    const section = headerSectionConfig[currentSection];

    return(
        <div className="w-160 border-red-500">
            {/* 홈 버튼 */}
            <button className="w-11 h-11 bg-cover bg-center"
            style={{backgroundImage:`url(${HomeIcon})`}}>
            </button>

            <div>
                {/* 제목 */}
                {section.showTitle && (
                <div className="flex items-center gap-2">
                    {section.image && (
                    <img src={section.image} alt="제목 이미지" />
                    )}
                    <h2>{section.title}</h2>
                </div>
                )}

                {/* 소제목 */}
                {currentProject && (
                <div className="flex items-center gap-2">
                    <img src={currentProject.image} alt="소제목" />
                    <h3>{currentProject.title}</h3>
                </div>
                )}
            </div>
        </div>
    );
}