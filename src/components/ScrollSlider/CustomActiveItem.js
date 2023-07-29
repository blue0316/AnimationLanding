import { ActiveItem } from "react-scroll-slider";

const CustomActiveItem = ({ children, ...props }) => {
  return <ActiveItem {...props}>{children}</ActiveItem>;
};

export default CustomActiveItem;
