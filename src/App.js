import Carousel from "./Carousel";
import "./styles.css";
import { slides } from "./carouselData.json";

export default function App() {
  return (
    <div className="App">
      <h1>React.js Image Carousel</h1>
      <Carousel data={slides} />
    </div>
  );
}
