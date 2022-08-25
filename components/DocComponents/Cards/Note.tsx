import { FC, ReactNode } from "react";
import configs from "../../../daymd.config";
export const Note: React.FC<{
  children: ReactNode;
  title?: string | "";
  className?: string | "";
}> = ({ children, className, title }) => {
  return (
    <div
      className={`my-5 h-min w-full rounded-lg border-2 border-blue-200 bg-blue-50 bg-opacity-25 dark:border-blue-900/50 dark:bg-blue-900/20 ${className}`}
    >
      <div className="flex h-max items-center space-x-4 p-6 py-4 text-blue-500">
        <div className="h-5 font-bold">{configs.cardsInDoc.Note}</div>
        <div className="h-5 font-normal">{title}</div>
      </div>
      <div className="break-all  text-content h-max pl-6 pr-6 mb-5">
        {children}
      </div>
    </div>
  );
};
