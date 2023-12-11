import Slider from "../Slider/Slider";
import s from "./roadmap.module.css";

export default function Roadmap({ orientation }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Roadmap</h2>
      <Slider orientation={orientation} />
    </div>
  );
}
