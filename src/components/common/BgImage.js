import classNames from "classnames";
import { motion } from "framer-motion";

const BgImage = ({ children, ...props }) => {
  return (
    <motion.div
      className={classNames({
        "bg-cover bg-center h-full flex justify-center": true,
        [props.className]: true,
        dark: props.dark,
      })}
      onClick={props.onClick}
      initial={{
        opacity: 0.5,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 0,
        duration: 0.3,
      }}
      style={{
        backgroundImage: `url(${props.url})`,
        ...props.style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default BgImage;
