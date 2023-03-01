import type { HTMLAttributes, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const Heading = ({ children, className }: Props) => {
  return <h2 className={`${className} text-2xl font-semibold`}>{children}</h2>;
};
export default Heading;
