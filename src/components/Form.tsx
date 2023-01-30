import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const Form = ({ children }: Props) => {
  return (
    <form className="w-96 mx-auto border-2 border-rose-300 px-6 py-10 rounded shadow-lg bg-white">
      {children}
    </form>
  );
};
export default Form;
