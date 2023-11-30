import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import s from "./slider.module.css";

export default function Slider() {
  const windWidth = window.innerWidth;
  console.log(windWidth);
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      //   spaceBetween={"2rem"}
      slidesPerView={4.3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className={s.container}>
          <div className={s.topSection}>
            <div className={s.time}>Q2</div>
            <p className={s.line}></p>
          </div>
          <div className={s.textSection}>
            <p className={s.title}>Token CMC listing</p>
            <p className={s.info}>
              The first stage of the token sale for users who qualify by meeting
              minimum criteria
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.container}>
          <div className={s.topSection}>
            <div className={s.time}>Q2</div>
            <p className={s.line}></p>
          </div>
          <div className={s.textSection}>
            <p className={s.title}>Token Buy</p>
            <p className={s.info}>
              The second stage of the token sale for all users who want to buy a
              token
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.container}>
          <div className={s.topSection}>
            <div className={s.time}>Q3</div>
            <p className={s.line}></p>
          </div>
          <div className={s.textSection}>
            <p className={s.title}>IDO</p>
            <p className={s.info}>
              WEFT token will be listed on cryptocurrency ranking websites such
              as CMC and CoinGecko
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={s.container}>
          <div className={s.topSection}>
            <div className={s.time}>Q3/4</div>
            <p className={s.line}></p>
          </div>
          <div className={s.textSection}>
            <p className={s.title}>Pancake swap tool</p>
            <p className={s.info}>
              Shifting from fixed price to volatile and listing on DEXes
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
