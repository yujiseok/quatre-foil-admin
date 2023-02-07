import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AsideBtn = ({ children }: Props) => {
  return (
    <button type="button" className="py-4 px-2 text-sm  hover:underline">
      {children}
    </button>
  );
};
export default AsideBtn;
