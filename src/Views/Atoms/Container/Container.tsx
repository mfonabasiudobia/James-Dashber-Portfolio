import { ContainerModel } from "./Models/Container";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";

const Container = ({
  className,
  variant,
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
}: ContainerModel) => {
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
    variantClass: `mx-auto px-7 ${
      variant === "fluid"
        ? "max-w-screen"
        : variant === "fixed"
        ? `max-w-xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl`
        : null
    }`,
  };

  return (
    <div className={`w-full ${Object.values(styles).join(" ")}`}>
      {children}
    </div>
  );
};

export default Container;
