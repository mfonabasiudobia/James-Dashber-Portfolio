import { Container, Drawer } from "@/Views/Atoms";
import { SearchModel } from "./Models/SearchModel";

const MainSearch: React.FC<SearchModel> = ({ isOpen, closeDrawer }) => {
  return (
    <Drawer
      isOpen={isOpen}
      closeDrawer={closeDrawer}
      size="40vh"
      className="flex flex-col"
      direction="top"
      customIdSuffix="main-search"
    >
      <Container
        variant="fluid"
        className="py-5 relative flex items-center justify-center"
      >
        This is awesome
      </Container>
    </Drawer>
  );
};

export default MainSearch;
