import { MainHero, MainNavigation, About, MainFooter } from "@/Views/Organisms";
import { HomeTemplate } from "@/Views/Templates";

const Home: React.FC = () => {
  return (
    <HomeTemplate
      hero={<MainHero />}
      navigation={<MainNavigation />}
      about={<About />}
      footer={<MainFooter />}
    />
  );
};

export default Home;
