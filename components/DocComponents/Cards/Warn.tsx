import { FC, ReactNode } from "react";
import configs from "../../../daymd.config";
export const Warn: React.FC<{
  children: ReactNode;
  title?: string | "";
  className?: string | "";
}> = ({ children, className, title }) => {
  return (
    <div
      className={`my-5 h-min w-full rounded-lg border-2 border-yellow-200 bg-yellow-50 bg-opacity-25 dark:border-yellow-900/50 dark:bg-yellow-900/20 ${className}`}
    >
      <div className="flex h-max items-center space-x-4 p-6 py-4 text-yellow-500 dark:text-violet-300">
        {/* <div className="mt-1 h-5 w-5 shrink-0 text-violet-600">
          <Icon name="exclamation" />
        </div> */}
        <div className="h-5 font-bold">{configs.cardsInDoc.Warning}</div>
        <div className="h-5 font-normal">{title}</div>
      </div>
      <div className="break-all  text-content h-max pl-6 pr-6 mb-5">
        {children}
      </div>
    </div>
  );
};
