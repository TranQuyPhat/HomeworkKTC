import React, { useState } from "react";
import TabButton from "./tab";
import style from "./style.module.css";
type Tab = {
  label: string;
  content: string;
};

const tabs: Tab[] = [
  {
    label: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    label: "APPROACH",
    content: "This is the approach tab content.",
  },
  {
    label: "CULTURE",
    content: "This is the culture tab content.",
  },
  {
    label: "METHOD",
    content: "This is the method tab content.",
  },
];

const ButtonTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.container}>
      <div>
        <div className={style.buttonTabs}>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              label={tab.label}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className={style.tabContent}>{tabs[activeIndex].content}</div>
      </div>
    </div>
  );
};

export default ButtonTabs;
