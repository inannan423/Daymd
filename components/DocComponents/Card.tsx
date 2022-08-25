import { FC, ReactNode } from "react";
import classNames from "classnames";

export const Card: FC<{
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  dark?: boolean;
}> = ({ children, className, shadow = false, dark = false }) => {
  return (
    <div
      className={classNames(
        "overflow-hidden rounded-2xl border",
        dark
          ? "border-gray-800 bg-gray-900"
          : "border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900",
        shadow &&
          `shadow-lg ${
            dark ? "shadow-gray-900" : "shadow-gray-100 dark:shadow-gray-900"
          }`,
        className
      )}
    >
      {children}
    </div>
  );
};
