import React from "react";
import LikeButton from "./LikeButton/LikeButton";
import ButtonTabs from "./tab/ButtonTab";
import SlideWithThumb from "./SlideWithThumb/SlideWithThumb";
import Accordion from "./ButtonAccordion";

type Props = {};

export default function Day1({}: Props) {
  return (
    <div>
      <LikeButton />
      <ButtonTabs />
      <SlideWithThumb />
      <Accordion />
    </div>
  );
}
