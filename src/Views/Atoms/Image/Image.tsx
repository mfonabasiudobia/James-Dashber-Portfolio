import { ImageModel } from "./Models/Image";
import useAtomStyle from "@/Views/Atoms/Hooks/useAtomStyle";
import Image from "next/image";

const Avatar: React.FC<ImageModel> = ({
  className,
  variant,
  elevation,
  margin,
  padding,
  alt,
  src,
  objectFit = "contain",
  fill = false,
  width = 0,
  height = 0
}) => {


  const styles = {
    importedStyles: useAtomStyle({ margin, padding, className, elevation }),
    variantClass: `${variant === "circle" ? 'rounded-full' : variant === "square" ? `rounded-0` : variant === "rounded" ? 'rounded' : null}`,
    objectFit: objectFit === "contain" ? 'object-contain' : objectFit === "cover" ? "object-cover" : objectFit === "fill" ? "object-fill" : null
  }

  return (
    <Image alt={alt} src={src} width={width} priority={true} height={height} fill={fill} className={`${Object.values(styles).join(" ")}`} />
  );
};

export default Avatar;