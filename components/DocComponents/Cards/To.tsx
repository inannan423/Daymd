// markdown跳转组件
import { FC, ReactNode } from "react";
import Link from "next/link";
export const To: React.FC<{
  children: ReactNode;
  to: string;
  className?: string | "";
}> = ({ children, className, to }) => {
  return (
    <Link href={to}>
      <button className={`btn btn-primary btn-xs ${className}`}>
        {children}
      </button>
    </Link>
  );
};
