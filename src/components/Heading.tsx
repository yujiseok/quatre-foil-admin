import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Heading = ({ children }: Props) => {
  return <h2 className="text-center font-semibold text-2xl">{children}</h2>;
};
export default Heading;
