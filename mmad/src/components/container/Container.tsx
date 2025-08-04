import type { ReactNode } from "react";


interface IContainer {
  children: ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="w-5xl m-auto">
    {children}
  </div>;
}

export default Container;
