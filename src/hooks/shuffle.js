/* eslint-disable no-unused-vars */
import { useState } from "react";

export const shuffle = (arr) => {
  let shuffled = [];
  shuffled = [arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
