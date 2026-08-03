import { HeroSlideshow } from "@/components/home/hero-slideshow";

/** Hero imagery lives in `public/homepage` — file names are encoded for the spaces. */
const slides = [
  { src: "/homepage/12.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/13.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/15.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/16.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/28.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/34.png", alt: "Studio360 architectural visualisation" },
  { src: "/homepage/Al%20Alakaba%20C.png", alt: "Al Alakaba" },
  { src: "/homepage/Green%20Bay%20C.png", alt: "Green Bay" },
  { src: "/homepage/Habib%20C.png", alt: "Habib Residence" },
  { src: "/homepage/Salsabil%20C.png", alt: "Salsabil" },
  { src: "/homepage/Shuchana%20D%20C.png", alt: "Shuchana" },
];

export default function Home() {
  return <HeroSlideshow slides={slides} />;
}
