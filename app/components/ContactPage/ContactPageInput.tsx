import { twMerge } from "tailwind-merge";

interface ContactPageInputProps {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
  type?: "text" | "email";
}

export const ContactPageInput = ({
  name,
  id = name,
  placeholder = "",
  className = "",
  type="text"
}: ContactPageInputProps) => {
  return (
    <input
      required
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={twMerge(
        "px-4 w-full block autofill:bg-black/80 py-2 rounded-3xl hover:ring-blue-400 hover:ring-1 focus:ring-2 focus:ring-blue-600 transition-colors duration-1000 focus:border-blue-600 md:text-3xl bg-black/80 border border-white/20",
        className
      )}
    />
  );
};
