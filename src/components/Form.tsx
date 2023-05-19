import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const Form = ({ children }: Props) => {
  return (
    <form className="mx-auto w-96 rounded border-2 border-rose-300 bg-white px-6 py-10 shadow-lg">
      {children}
    </form>
  );
};
export default Form;
