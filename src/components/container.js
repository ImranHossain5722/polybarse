import classNames from "classnames";
import React from "react";

export default function Container({ children, className }) {
  return <div className={classNames("w-full px-3 m-auto text-white", className)}>{children}</div>;
}
