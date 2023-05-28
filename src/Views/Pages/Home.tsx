import {
  MainHero,
  MainNavigation,
  About,
  MainFooter,
  Portfolio,
} from "@/Views/Organisms";
import { HomeTemplate } from "@/Views/Templates";

const Home: React.FC = () => {
  return (
    <HomeTemplate
      hero={<MainHero />}
      navigation={<MainNavigation />}
      about={<About />}
      portfolio={<Portfolio />}
      footer={<MainFooter />}
    />
  );
};

export default Home;
