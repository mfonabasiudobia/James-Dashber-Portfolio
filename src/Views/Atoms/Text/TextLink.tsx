import Link from "next/link";
import { LinkModel } from "./Models/Link";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";

const TextLink: React.FC<LinkModel> = ({
  variant = "text",
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
  href,
  underline = "hover",
  text,
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
    variantClass: ` 
    ${
      variant === "text"
        ? "inline-block"
        : variant === "button-contained"
        ? `${getBackgroundColor()} no-underline text-center inline-block rounded px-5 py-2 text-white hover:bg-opacity-90`
        : variant === "button-outlined"
        ? `border ${getBorderColor()} no-underline text-center inline-block rounded px-5 py-2 hover:bg-opacity-90`
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
    underlineClass: `${
      underline === "none"
        ? "no-underline"
        : underline === "always"
        ? "underline"
        : underline === "hover" && variant === "text"
        ? "hover:underline"
        : null
    }`,
  };

  return (
    <Link href={href} legacyBehavior>
      <a className={Object.values(styles).join(" ")}>
        {text ? text : children}
      </a>
    </Link>
  );
};

export default TextLink;
