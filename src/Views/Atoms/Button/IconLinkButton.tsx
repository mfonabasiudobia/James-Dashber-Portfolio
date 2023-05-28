import { IconLinkButtonModel } from "./Models/IconLinkButtonModel";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";
import Link from "next/link";

const IconLinkButton: React.FC<IconLinkButtonModel> = ({
  variant,
  className,
  elevation,
  size,
  color,
  margin,
  padding,
  align,
  weight,
  name,
  type,
  href,
  onClick,
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
    variantClass: `text-3xl cursor-pointer hover:bg-opacity-80 rounded-full inline-block p-1 ${
      variant === "contained"
        ? `${getBackgroundColor()} text-white`
        : variant === "outlined"
        ? `border ${getBorderColor()} `
        : ""
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
    }),
  };

  const getIconType = () => {
    switch (type) {
      case "ai":
        return require("react-icons/ai")[name];
      case "fa":
        return require("react-icons/fa")[name];
      case "io":
        return require("react-icons/io")[name];
      case "hi":
        return require("react-icons/hi")[name];
      case "ci":
        return require("react-icons/ci")[name];
      case "bs":
        return require("react-icons/bs")[name];
      default:
        return require("react-icons/md")[name];
    }
  };

  const Myicon = getIconType();

  return (
    <Link href={href} legacyBehavior>
      <a onClick={onClick}>
        <Myicon className={`${Object.values(styles).join(" ")}`} />
      </a>
    </Link>
  );
};

export default IconLinkButton;
