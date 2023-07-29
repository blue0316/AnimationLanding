import Link from "next/link";
import { memo } from "react";

const ALink = ({ href, children, className, onClick }) => {
  /**
   * On click handler
   *
   * @param {MouseEvent} e
   */
  function onClickHandler(event) {
    if (href == "#") {
      event.preventDefault();
    }

    if (typeof onClick == "function") {
      onClick();
    }
  }

  return (
    <Link href={href ? href : "#"}>
      <div className={className} onClick={onClickHandler}>
        {children}
      </div>
    </Link>
  );
};

export default memo(ALink);
