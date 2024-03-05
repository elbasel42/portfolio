import { twMerge } from "tailwind-merge";

interface ContactPageInputProps {
  name: string;
  id?: string;
  className?: string;
  placeholder?: string;
}

export const ContactPageInput = ({
  name,
  id = name,
  placeholder = "",
  className = "",
}: ContactPageInputProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      className={twMerge(
        "px-4 py-2 rounded-3xl focus:ring-2 focus:ring-blue-600 transition-colors duration-1000 focus:border-blue-600 md:text-3xl bg-black/80 border border-white/20",
        className
      )}
    />
  );
};
