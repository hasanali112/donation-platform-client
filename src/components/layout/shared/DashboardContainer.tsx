import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TChildProps = {
  children: ReactNode;
  className?: string;
};

const DashboardContainer = ({ children }: TChildProps) => {
  return <div className={cn(`w-full max-w-[1200px] `)}>{children}</div>;
};

export default DashboardContainer;
