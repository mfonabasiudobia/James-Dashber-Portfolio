import { ModalModel } from "./Models/ModalModel";
import { Box } from "@/Views";

const Modal: React.FC<ModalModel> = ({ children }) => {

  return (
    <Box variant="nav">
      {children}
    </Box >
  );

};

export default Modal;