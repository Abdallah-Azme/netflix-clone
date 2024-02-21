import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto container px-2.5 lg:px-20", className)}>
      {children}
    </div>
  );
}
