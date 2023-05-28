import React from "react";
import {
  Container,
  Box,
  Text,
  Image,
  TextLink,
  IconButton,
  Button,
} from "@/Views/Atoms";
import { List, ListItem } from "@/Views/Molecules";
import { PortfolioModel } from "./Models/PortfolioModel";
import PortfolioImage from "@/images/portfolio-img.png";

const Portfolio: React.FC<PortfolioModel> = () => {
  return (
    <Box className="bg-[#0E1821] py-16">
      <Container variant="fixed" color="white" spacingY={7}>
        <Text
          variant={"h2"}
          size="4xl"
          weight="medium"
          className="kanit-font"
          text="PROSJEKTER"
        />

        <List childrenClassName="font-medium fanit-font" alignment="horizontal">
          {["All", "Guided", "JavaScript", "Python"].map((item, index) => (
            <ListItem
              Item={
                <Button
                  text={item}
                  variant={"text"}
                  className={`${item === "All" ? "text-[#62FBD7]" : null}`}
                />
              }
              key={index}
            />
          ))}
        </List>

        {[1, 2, 3].map((item, index) => (
          <Box className="grid md:grid-cols-3 gap-5">
            <Image
              alt="Logo"
              variant={"square"}
              className="w-full"
              src={PortfolioImage}
              fill={false}
            />
            <Box className="md:col-span-2" spacingY={4}>
              <Text
                variant={"h2"}
                size="3xl"
                weight="medium"
                className="kanit-font"
                text="Project Title"
              />
              <Text
                variant={"p"}
                text="Project Description: dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.  suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit."
              />

              <Box spacingY={5} className="kanit-font">
                <List
                  childrenClassName="rounded-full bg-[#23455A] text-light text-sm px-4 py-1"
                  alignment="horizontal"
                >
                  <ListItem Item="Next JS" />
                  <ListItem Item="React JS" />
                  <ListItem Item="Python" />
                  <ListItem Item="HTML" />
                </List>

                <List alignment="horizontal" spacingX={5}>
                  <ListItem
                    Item={
                      <TextLink
                        href={"/"}
                        text="Demo"
                        className="text-[#62FBD7] border-2 rounded border-[#62FBD7] min-w-[130px] py-2 text-center hover:no-underline"
                      />
                    }
                  />

                  <ListItem
                    Item={
                      <TextLink
                        href={"/"}
                        text={
                          <React.Fragment>
                            <IconButton name={"AiOutlineGithub"} type={"ai"} />
                            <span>KILDEKODE</span>
                          </React.Fragment>
                        }
                        className="bg-white text-dark border-2 rounded border-white min-w-[130px] py-1 text-center hover:no-underline"
                      />
                    }
                  />
                </List>
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Portfolio;
