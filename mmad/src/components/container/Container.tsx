import type { ReactNode } from "react";


interface IContainer {
  children: ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="xl:w-5xl max-xl:container max-sm:px-5 m-auto">
    {children}
  </div>;
}

export default Container;
