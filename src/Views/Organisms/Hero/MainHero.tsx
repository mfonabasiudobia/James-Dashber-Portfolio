import ProfilePhoto from "@/images/profile-photo.png";
import {
  Container,
  Box,
  Image,
  Text,
  Button,
  IconButton,
  TextLink,
} from "@/Views/Atoms";
import { MainHeroModel } from "./Models/MainHeroModel";

const MainHeroModel: React.FC<MainHeroModel> = () => {
  const styles = {
    animatedBtn: `relative after:w-0 after:h-full after:bg-white after:left-0 after:top-0 after:absolute hover:after:w-full after:transition-all after:duration-1000 overflow-hidden after:z-10 after:content-['Prosjekter'] after:text-center after:overflow-hidden after:flex after:items-center after:justify-center hover:text-black z-50`,
  };

  const actionButtonContainer = (isMobile: boolean) => {
    return (
      <Box
        padding={`py-16 ${
          !isMobile ? "hidden md:flex md:flex-col" : "flex flex-col md:hidden"
        }`}
        spacingY={10}
      >
        <Button
          text="Prosjekter"
          variant={"outlined"}
          color="white"
          className={`fira-font ${styles.animatedBtn}`}
          padding="px-10"
          size="lg"
        />

        <IconButton
          name={"HiOutlineArrowDown"}
          type={"hi"}
          color="white"
          className="animate-bounce"
          size="5xl"
        />
      </Box>
    );
  };

  return (
    <Box className="bg-primary">
      <Container variant="fixed" className="grid md:grid-cols-2 min-h-[100vh]">
        <Box className="order-2 md:order-1 flex flex-col justify-center items-center">
          <Image
            alt="Profile Photo"
            variant={"square"}
            src={ProfilePhoto}
            fill={false}
          />

          {actionButtonContainer(true)}
        </Box>
        <Box
          className="order-1 md:order-2 flex flex-col justify-end items-start relative"
          spacingY={3}
          padding="py-16"
        >
          <Text variant="span" className="fira-font" size="sm" color="light">
            Hei, Jeg er
          </Text>

          <TextLink
            href="/"
            className="absolute top-0 md:top-5 right-0 underline"
            color="light"
            text="Download CV"
          />
          <Box>
            <Text
              variant={"h1"}
              size="3xl"
              color="white"
              className="kanit-font"
            >
              James Dasher
            </Text>
            <Text
              variant={"h3"}
              color="success"
              size="3xl"
              className="fira-font"
            >{`> Front-end developer`}</Text>
          </Box>

          {actionButtonContainer(false)}
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeroModel;
