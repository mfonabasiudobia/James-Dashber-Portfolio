import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";
import { TextInputModel } from "./Models/TextInputModel";

const Button: React.FC<TextInputModel> = ({
  className,
  label,
  type = "text",
  id,
  defaultValue,
  disabled = false,
  helperText,
  placeholder,
  size = "sm",
  error,
  required = false,
}) => {
  const styles = {
    importedStyles: useAtomStyle({ className }),
    formControl: `w-full z-10 px-3 rounded border border-gray-200 text-dark focus:border-black transition tracking-wider text-sm focus:outline-0 bg-white`,
    formResponsivenessClass: `${
      size === "sm"
        ? "py-2"
        : size === "xs"
        ? "py-1"
        : size === "md"
        ? "py-3"
        : size === "lg"
        ? "py-4"
        : size === "xl"
        ? "py-5"
        : "py-3"
    }`,
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={defaultValue}
        className={`${Object.values(styles).join(" ")}`}
        id={id}
      />
      {helperText && (
        <span className={`text-sm font-light ${error ? "text-danger" : ""}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Button;
