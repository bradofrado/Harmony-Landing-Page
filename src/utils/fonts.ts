import { Mulish } from "next/font/google";
import local from 'next/font/local';

export const mulish = Mulish({
  subsets: ['latin']
});

export const cooper = local({
  src: '../fonts/CooperLightBT.ttf'
});