import React, { useState } from 'react'
import style from './style.module.css'
type Props = {}
    const items = [
{
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces.',
  },
  {
    title: 'Why use React?',
    content: 'It allows for building reusable components and efficient rendering.',
  },
  {
    title: 'How does React work?',
    content: 'React uses a virtual DOM and updates the real DOM only when needed.',
  },
];

export default function ButtonMultipleAccordion({}: Props) {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
 const toggle = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // nếu đang mở → đóng
        : [...prev, index] // nếu đang đóng → mở
    );
  };

  return (
    
    <div className={style.container}>
        {items.map((item,index) => (
            <div key={index} className={style.accordionItem}>
                <button 
                    className={`${style.accordionButton}  ${activeIndices.includes(index) ? style.active : ''}`}
                    onClick={() => {
                        toggle(index)}}
                >
                    {item.title}
                </button>
                <div
            className={`${style.content } ${activeIndices.includes(index) ? style.active : ''}`}

          >
            {item.content}
          </div>
            </div>
        ))}
    </div>
  )
}