import { BoxModel } from "./Models/Box";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";

const Box = ({
  className,
  variant = "div",
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
  children,
}: BoxModel) => {
  const Tag = variant;

  const styles = {
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

  return <Tag className={`${Object.values(styles).join(" ")}`}>{children}</Tag>;
};

export default Box;
