import type { HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const Heading = ({ children, className }: Props) => {
  return <h2 className={`${className} font-semibold text-2xl`}>{children}</h2>;
};
export default Heading;
