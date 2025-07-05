import React from "react";
import Button from "./Button";

type Props = {
  onButtonClick: (label: string) => void;
};
const number = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", "C", "=", "+"],
];
export default function ButtonPanel(props: Props) {
  return (
    <div>
      {number.map((row, index) => (
        <div key={index}>
          {row.map((btn) => (
            <Button key={btn} label={btn} onClick={props.onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}
