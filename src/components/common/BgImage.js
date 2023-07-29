import classNames from "classnames";

const BgImage = ({ children, ...props }) => {
  return (
    <div
      className={classNames("bg-cover bg-center h-full", props.className)}
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
