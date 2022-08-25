import { FC, ReactNode } from "react";
import configs from "../../../daymd.config";
export const Tips: React.FC<{
  children: ReactNode;
  title?: string | "";
  className?: string | "";
}> = ({ children, className, title }) => {
  return (
    <div
      className={`my-5 h-min w-full rounded-lg border-2 border-green-200 bg-green-50 bg-opacity-25 dark:border-green-900/50 dark:bg-green-900/20 ${className}`}
    >
      <div className="flex h-max items-center space-x-4 p-6 py-4 text-green-500 dark:text-green-300">
        <div className="h-5 font-bold">{configs.cardsInDoc.Tip}</div>
        <div className="h-5 font-normal">{title}</div>
      </div>
      <div className="break-all  text-content h-max pl-6 pr-6 mb-5">
        {children}
      </div>
    </div>
  );
};
