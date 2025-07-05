import React from "react";
import style from "./style.module.css";
type Props = {};
const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "Why use React?",
    content:
      "It allows for building reusable components and efficient rendering.",
  },
  {
    title: "How does React work?",
    content:
      "React uses a virtual DOM and updates the real DOM only when needed.",
  },
];
export default function ButtonAccordions({}: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className={style.container}>
      {items.map((item, index) => (
        <div key={index} className={style.accordionItem}>
          <button
            className={`${style.accordionButton} ${
              activeIndex === index ? style.active : ""
            }`}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            {item.title}
          </button>
          <div
            className={`${style.content} ${
              activeIndex === index ? style.active : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
