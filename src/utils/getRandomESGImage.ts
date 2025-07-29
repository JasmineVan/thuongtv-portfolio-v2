import ESG1 from "../assets/ESG/ESG1.png";
import ESG2 from "../assets/ESG/ESG2.png";
import ESG3 from "../assets/ESG/ESG3.png";
import ESG4 from "../assets/ESG/ESG4.png";
import ESG5 from "../assets/ESG/ESG5.png";
import ESG6 from "../assets/ESG/ESG6.png";
import ESG7 from "../assets/ESG/ESG7.png";
import ESG8 from "../assets/ESG/ESG8.png";
import ESG9 from "../assets/ESG/ESG9.png";
import ESG10 from "../assets/ESG/ESG10.png";
import ESG11 from "../assets/ESG/ESG11.png";
import ESG12 from "../assets/ESG/ESG12.png";
import ESG13 from "../assets/ESG/ESG13.png";
import ESG14 from "../assets/ESG/ESG14.png";
import ESG15 from "../assets/ESG/ESG15.png";
import ESG16 from "../assets/ESG/ESG16.png";

const images = [
  ESG1,
  ESG2,
  ESG3,
  ESG4,
  ESG5,
  ESG6,
  ESG7,
  ESG8,
  ESG9,
  ESG10,
  ESG11,
  ESG12,
  ESG13,
  ESG14,
  ESG15,
  ESG16,
];

export const getRandomESG = (): string => {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};
