import type { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
}: Props) => {
  return (
    <input
      className="mb-4 w-full rounded border border-gray-200 px-2 py-2 focus:border-rose-400 focus:outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
export default Input;
