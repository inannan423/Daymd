// markdown跳转组件
import { FC, ReactNode } from "react";
import Link from "next/link";
export const To: React.FC<{
  children: ReactNode;
  to: string;
  className?: string | "";
}> = ({ children, className, to }) => {
  return (
    <a href={to} style={{ textDecoration: "none" }} target={"_blank"}>
      <button className={`btn  mx-1 btn-primary btn-sm ${className}`}>
        {children}
      </button>
    </a>
  );
};
