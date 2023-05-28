import { Box, Container, TextLink, Text, IconButton } from "@/Views/Atoms";
import React from "react";
import { MainFooterModel } from "./Models/MainFooterModel";

const MainFooter: React.FC<MainFooterModel> = () => {
  return (
    <Box variant="footer" className="bg-[#06111A] py-16">
      <Container variant="fixed" spacingY={3} color="white">
        <Text
          variant={"h2"}
          size="2xl"
          weight="medium"
          className="kanit-font"
          text="Kontakt Informasjon"
        />

        <ul>
          <li>
            <TextLink
              href={"mailto:jamesdasher.dev@gmail.com"}
              text={
                <>
                  <IconButton name={"AiOutlineMail"} type={"ai"} />{" "}
                  <span>jamesdasher.dev@gmail.com</span>
                </>
              }
            />
          </li>
          <li>
            <TextLink
              href={"tel:+47 99 99 99 99"}
              text={
                <>
                  <IconButton name={"MdPhone"} type={"md"} />{" "}
                  <span>+47 99 99 99 99</span>
                </>
              }
            />
          </li>
        </ul>
      </Container>
    </Box>
  );
};

export default MainFooter;
