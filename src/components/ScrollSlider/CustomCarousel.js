import { Carousel } from "react-scroll-slider";

const CustomCarousel = ({ children, ...props }) => {
  return <Carousel {...props}>{children}</Carousel>;
};

export default CustomCarousel;
