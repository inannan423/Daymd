import { FC } from "react";

import { ExclamationIcon } from "./Exclamation";

export type IconName = "exclamation";

const iconMap = {
  exclamation: ExclamationIcon,
};

export const Icon: FC<{ name: IconName }> = ({ name }) => {
  const IconComponent = iconMap[name];
  return <IconComponent />;
};
