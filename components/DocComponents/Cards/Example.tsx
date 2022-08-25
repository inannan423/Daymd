import { FC, ReactNode } from "react";
import configs from "../../../daymd.config";
export const Example: React.FC<{
  children: ReactNode;
  title?: string | "";
  className?: string | "";
}> = ({ children, className, title }) => {
  return (
    <div
      className={`my-5 h-min w-full rounded-lg border-2 border-pink-200 bg-pink-50 bg-opacity-25  ${className}`}
    >
      <div className="flex h-max items-center space-x-4 p-6 py-4 text-pink-500">
        <div className="h-5 font-bold">{configs.cardsInDoc.Example}</div>
        <div className="h-5 font-normal">{title}</div>
      </div>
      <div className="break-all  text-content h-max pl-6 pr-6 mb-5">
        {children}
      </div>
    </div>
  );
};
