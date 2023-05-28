import { ButtonModel } from "./Models/ButtonModel";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";

const Button: React.FC<ButtonModel> = ({
  variant,
  className,
  elevation,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
  text,
  onClick,
  children,
}) => {
  const getBackgroundColor = () => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "light":
        return "bg-light";
      case "danger":
        return "bg-danger";
      case "secondary":
        return "bg-secondary";
      case "success":
        return "bg-success";
      case "dark":
        return "bg-dark";
      default:
        return "bg-primary";
    }
  };

  const getBorderColor = () => {
    switch (color) {
      case "primary":
        return "border-primary";
      case "light":
        return "border-light";
      case "danger":
        return "border-danger";
      case "secondary":
        return "border-secondary";
      case "success":
        return "border-success";
      case "dark":
        return "border-dark";
      default:
        return "border-light";
    }
  };

  const styles = {
    variantClass: `text-center inline-block rounded py-2 
    ${
      variant === "text"
        ? ""
        : variant === "contained"
        ? `${getBackgroundColor()} text-white hover:bg-opacity-90`
        : variant === "outlined"
        ? `border ${getBorderColor()} hover:bg-opacity-90`
        : null
    }`,
    importedStyles: useAtomStyle({
      size,
      color,
      margin,
      padding,
      className,
      elevation,
      align,
      weight,
      spacingX,
      spacingY,
      spacing,
    }),
  };

  return (
    <button className={`${Object.values(styles).join(" ")}`} onClick={onClick}>
      {text ? text : children}
    </button>
  );
};

export default Button;
