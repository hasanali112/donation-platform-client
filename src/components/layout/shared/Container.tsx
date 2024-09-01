import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ className, children }: TProps) => {
  return (
    <div
      className={cn(
        `w-full lg:max-w-[1200px]  xl:max-w-[1300px] px-[10px] mx-auto`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
