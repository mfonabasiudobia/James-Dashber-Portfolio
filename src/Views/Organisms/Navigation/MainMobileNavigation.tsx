import {
  Box,
  Container,
  Drawer,
  IconButton,
  IconLinkButton,
  Image,
  Text,
  TextLink,
} from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";
import { MainMobileNavigationModel } from "./Models/MainMobileNavigationModel";

const MainMobileNavigation: React.FC<MainMobileNavigationModel> = ({
  isOpen,
  closeDrawer,
}) => {
  const styles = {
    navItem: `py-3 px-5 block text-center w-full`,
  };

  return (
    <Drawer
      isOpen={isOpen}
      closeDrawer={closeDrawer}
      size="100vw"
      customIdSuffix="main-mobile-drawer"
    >
      <Box className="bg-primary h-full">
        <Container
          variant="fluid"
          color="success"
          className="py-5 flex items-center justify-between border-b-2 border-success"
        >
          <TextLink href="/" text={`james_dasher`} />

          <IconButton name="AiOutlineClose" type="ai" onClick={closeDrawer} />
        </Container>

        <Container
          variant="fluid"
          color="white"
          className="flex items-center justify-center h-full"
        >
          <List alignment="vertical" className="flex-1">
            {["Link 01", "Link 02", "Link 03", "Link 04"].map((item, index) => (
              <ListItem
                key={index}
                Item={
                  <TextLink href="/" text={item} className={styles.navItem} />
                }
              />
            ))}
          </List>
        </Container>
      </Box>
    </Drawer>
  );
};

export default MainMobileNavigation;
