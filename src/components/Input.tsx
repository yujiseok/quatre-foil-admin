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
      className="w-full px-2 py-2 border border-gray-200 rounded mb-4 focus:outline-none focus:border-rose-400"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
export default Input;
