import React from 'react';
import ButtonAccordions from './ButtonAccordions';
import ButtonMultipleAccordion from './ButtonMultipleAccordion';
import style from './style.module.css';

type Props = {}

export default function Accordion({}: Props) {
  return (
    <div className={style.wrapper}>
      <div className={style.column}>
        <h3>Single Accordions</h3>
        <ButtonAccordions />
      </div>
      <div className={style.column}>
        <h3>Multi Accordions</h3>
        <ButtonMultipleAccordion />
      </div>
    </div>
  );
}
