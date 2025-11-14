import type { ReactNode } from "react";

type PropsHeading = {
  children: ReactNode;
};
export function Heading({ children }: PropsHeading) {
  return <h1 className="text-3xl font-semibold">{children}</h1>;
}
