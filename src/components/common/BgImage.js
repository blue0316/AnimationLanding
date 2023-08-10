import classNames from "classnames";

const BgImage = ({ children, ...props }) => {
  return (
    <div
      className={classNames({
        "bg-cover bg-center h-full flex justify-center": true,
        [props.className]: true,
        dark: props.dark,
      })}
      onClick={props.onClick}
      style={{
        backgroundImage: `url(${props.url})`,
        ...props.style,
      }}
    >
      {children}
    </div>
  );
};

export default BgImage;
