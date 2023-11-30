import Slider from "../Slider/Slider";
import s from "./roadmap.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Roadmap() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Roadmap</h2>
      <Slider />
    </div>
  );
}
