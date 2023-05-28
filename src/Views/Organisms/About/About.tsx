import { Container, Box, Image, Text, Button, IconButton } from "@/Views/Atoms";
import { AboutModel } from "./Models/AboutModel";
import Logos from "@/images/logos.png";

const About: React.FC<AboutModel> = () => {
  return (
    <Box className="bg-[#011627] py-16">
      <Container variant="fixed" className="grid md:grid-cols-2 gap-10">
        <Box spacingY={10}>
          <Box spacingY={2}>
            <Text
              variant={"h2"}
              size="4xl"
              color="white"
              weight="medium"
              className="kanit-font"
              text="ABOUT"
            />
            <Text
              variant={"h1"}
              size="5xl"
              weight="bold"
              className="text-[#FFB800] kanit-font"
              text="James Dasher"
            />
          </Box>

          <Box>
            <Image alt="Logo" variant={"square"} src={Logos} fill={false} />
          </Box>

          <Box color="white" spacingY={4}>
            <Text variant={"p"}>
              Jeg er en frontend-utvikler med erfaring i Python og har tidligere
              jobbet som intern hos Kodeverket Bergen. Der var jeg med på å
              designe og utvikle nettsider ved hjelp av verktøy som Figma for
              design og React og Next JS for utrulling av nettsidene.
            </Text>
            <Text variant={"p"}>
              På fritiden liker jeg å jogge, gå på fjellturer med venner og å
              lese. Jeg har en lidenskap for å lære nye ting og eksperimentere
              med teknologi. For tiden lærer jeg Obsidian.md, slik at jeg kan
              lage mine egne plugins.
            </Text>
            <Text variant={"p"}>
              Jeg går nå gjennom ulike sertifiseringer gjennom FreeCodeCamp,
              blant annet i Responsive Web Design og Python, for å videreutvikle
              mine ferdigheter.
            </Text>
          </Box>
        </Box>
        <Box className="" spacingY={7}>
          <Text
            variant={"h1"}
            size="4xl"
            color="white"
            weight="medium"
            className="kanit-font"
            text="SKILLS"
          />

          <Box
            className="border border-gray-500 rounded-xl px-5 py-3"
            color="white"
            spacingY={3}
          >
            <Text
              variant={"h2"}
              size="xl"
              className="kanit-font"
              text="Programming Languages"
            />

            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </Box>

          <Box
            className="border border-gray-500 rounded-xl px-5 py-3"
            color="white"
            spacingY={3}
          >
            <Text
              variant={"h2"}
              size="xl"
              className="kanit-font"
              text="JavaScript Frameworks"
            />

            <ul className="list-disc list-inside">
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </Box>

          <Box
            className="border border-gray-500 rounded-xl px-5 py-3"
            color="white"
            spacingY={3}
          >
            <Text
              variant={"h2"}
              size="xl"
              className="kanit-font"
              text="Content Management Systems"
            />

            <ul className="list-disc list-inside">
              <li>Sanity.io</li>
              <li>Firebase</li>
            </ul>
          </Box>

          <Box
            className="border border-gray-500 rounded-xl px-5 py-3"
            color="white"
            spacingY={3}
          >
            <Text
              variant={"h2"}
              size="xl"
              className="kanit-font"
              text="Kurs og sertifiseringer"
            />

            <ul className="list-disc list-inside">
              <li>Scientific Computing with Python 50%</li>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
