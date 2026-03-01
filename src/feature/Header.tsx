// Header.tsx

import HomeIcon from "../assets/icon/4outhome.png"
import { headerSectionConfig } from "../types/HeaderConfig";
import type { Project } from "../types/Project";
import type { SectionType } from "../types/Section";

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
        <div className="w-160 border-red-500 border-2 flex pl-11 pt-7 items-center">
            {/* 홈 버튼 */}
            <button className="w-13 h-13 cursor-pointer flex items-center justify-center">
                <img src={HomeIcon} alt="홈" className="w-12 h-11 object-contain"/>
            </button>

            <div>
                {/* 제목 */}
                {section.showTitle && (
                <div className="flex items-baseline gap-2 ml-13">
                    {section.image && (
                    <img src={section.image} alt="제목 이미지" className="h-11"/>
                    )}
                    <h2 className="text-5xl">{section.title}</h2>
                </div>
                )}

                {/* 소제목 */}
                {currentProject && (
                <div className="flex items-center gap-2">
                    <img src={currentProject.image} alt="소제목"/>
                    <h3>{currentProject.title}</h3>
                </div>
                )}
            </div>
        </div>
    );
}