import {
  Container,
  Drawer,
  IconButton,
  IconLinkButton,
  Image,
  Text,
  TextLink,
} from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";
import Logo from "@/images/logo.png";
import { MainMobileNavigationModel } from "./Models/MainMobileNavigationModel";

const MainMobileNavigation: React.FC<MainMobileNavigationModel> = ({
  isOpen,
  closeDrawer,
}) => {
  const styles = {
    navItem: `py-3 px-5 hover:bg-light block w-full`,
  };

  return (
    <Drawer
      isOpen={isOpen}
      closeDrawer={closeDrawer}
      size="90vw"
      className="flex flex-col"
      customIdSuffix="main-mobile-drawer"
    >
      <Container
        variant="fluid"
        className="py-5 relative flex items-center justify-center"
      >
        <IconButton
          name="AiOutlineClose"
          className="absolute left-3 top-1/3"
          type="ai"
          onClick={closeDrawer}
        />
        <TextLink href="/">
          <Image
            src={Logo}
            alt="Logo"
            variant="square"
            fill={false}
            width={70}
          />
        </TextLink>
      </Container>
      <List alignment="vertical" className="flex-1">
        <ListItem
          Item={
            <TextLink href="/" text="Hangbags" className={styles.navItem} />
          }
        />
        <ListItem
          Item={
            <TextLink href="/" text="Contact Us" className={styles.navItem} />
          }
        />
      </List>
      <Container variant="fluid">
        <List
          alignment="horizontal"
          childrenClassName="font-light text-sm"
          className="py-5 space-x-2"
        >
          <ListItem
            Item={<IconLinkButton href="/" type="ai" name="AiFillFacebook" />}
          />
          <ListItem
            Item={
              <IconLinkButton href="/" type="ai" name="AiOutlineInstagram" />
            }
          />
          <ListItem
            Item={<IconLinkButton href="/" type="ai" name="AiFillYoutube" />}
          />
        </List>
      </Container>
    </Drawer>
  );
};

export default MainMobileNavigation;
