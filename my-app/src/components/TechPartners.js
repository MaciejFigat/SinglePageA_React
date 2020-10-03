import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  ContentBox,
  Paragraph,
  Link,
  ContainerBoxSecond,
  GridCenter,
  LinkPartners,
  LinkLogo,
} from "../styles/boxColorStyles";
import {
  ResponsiveDiv,
  BigContainerDiv,
  ContainerLogos,
  LinkOne,
} from "../styles/responsiveContainer";
import FujiElectric from "./svg/FujiElectric";
import Daikin from "./svg/Daikin";
import Fujitsu from "./svg/Fujitsu";
import Gree from "./svg/Gree";
import Lg from "./svg/Lg";
import Mitsubishi from "./svg/Mitsubishi";
import Panasonic from "./svg/Panasonic";
import Samsung from "./svg/Samsung";
const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    // x: "-100vw",
  },
};
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};
const AllTech = () => {
  const [partnersShow, setPartnersShow] = useState("showNone");

  const handleClickFuji = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showFuji");
      setPartnerName({
        ...partnerName,
        name: "Fuji Electric",
        logo: <FujiElectric />,
        motto: "Innovating Energy Technology",
        description:
          "Fuji Electric uses its core competence in electric and thermal energy technology in order to contribute to responsible and sustainable societies.",
        link: "https://www.fujielectric-europe.com/",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickFujitsu = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showFujitsu");
      setPartnerName({
        ...partnerName,
        name: "Fujitsu",
        logo: <Fujitsu />,
        motto: "Living together for our future",
        description:
          'Fujitsu General creates high-quality and environmentally-friendly products that provide good comfort in accordance with our basic policy to a "create comfortable environment" by utilizing the air conditioning technology and creativity we have fostered over many years.',
        link: "https://www.fujitsu.com/pl/",
      });
    } else {
      setPartnersShow("showNone");
    }
    console.log(partnersShow);
  };
  const handleClickMitsubishi = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showMitsubishi");
      setPartnerName({
        ...partnerName,
        name: "Mitsubishi",
        logo: <Mitsubishi />,
        motto:
          "Zmieniamy świat na lepsze przy użyciu zaawansowanych technologii.",
        description:
          "Od momentu powstania w 1921 roku Mitsubishi Electric jest liderem rozwoju myśli technicznej i innowacyjnych produktów w Japonii.",
        link: "https://pl.mitsubishielectric.com/pl/index.html",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickSamsung = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showSamsung");
      setPartnerName({
        ...partnerName,
        name: "Samsung",
        logo: <Samsung />,
        motto: "Niezawodne produkty, które pracują dla Ciebie.",
        description:
          "Jako światowy lider w zakresie technologii firma Samsung nieustannie wykorzystuje innowacje i nowe odkrycia, aby w sposób ciągły zmieniać oblicze branży elektronicznej. Przez ostatnie czterdzieści lat stosowaliśmy te same przełomowe innowacje w systemach klimatyzacji. Dzięki niesamowitej konstrukcji oraz zaawansowanym funkcjom systemy klimatyzacji firmy Samsung rewolucjonizują branżę klimatyzacyjną.",
        link: "https://www.samsung.com/pl/business/climate/",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickDaikin = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showDaikin");
      setPartnerName({
        ...partnerName,
        name: "Daikin",
        logo: <Daikin />,
        motto: "Energooszczędna klimatyzacja w twoim domu",
        description:
          "Ponad 90 lat doświadczenia w klimatyzacji umożliwia nam oferowanie najbardziej komfortowych, energooszczędnych i niezawodnych rozwiązań dostępnych na rynku.",
        link:
          "https://www.daikin.pl/pl_pl/klimatyzacja-ogrzewanie-wentylacja/do-domu/klimatyzator.html",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickLg = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showLg");
      setPartnerName({
        ...partnerName,
        name: "Lg",
        logo: <Lg />,
        motto: "Żyj zdrowo - Life's good.",
        description:
          "LG oferuje szeroki wybór klimatyzatorów. Dzięki klimatyzacji możesz cieszyć się optymalną temperaturą wszędzie, o każdej porze dnia i nocy. Kontroluj temperaturę Twojego pomieszczenia dzięki różnorodnym opcjom klimatyzacji LG, w tym systemom single- i multi-split, Multi V™ i heat recovery, które sprawiają, że powietrze jest świeższe i czystsze. ",
        link: "https://www.lg.com/pl/klimatyzacja",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickPanasonic = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showPanasonic");
      setPartnerName({
        ...partnerName,
        name: "Panasonic",
        logo: <Panasonic />,
        motto: "Wydajność i oszczędności.",
        description:
          "Oddany idei ochrony środowiska oraz oszczędności energii, Panasonic Heating and Cooling Solutions oferuje najlepszą wydajność i pracę jednostek, tym samym prowadząc do znacznie niższych rachunków za energię. Dzięki doświadczeniu gromadzonemu od ponad 30 lat oraz sprzedaży produktów do ponad 120 krajów, firma Panasonic niezaprzeczalnie zajmuje czołową pozycję w sektorze ogrzewania i chłodzneia.",
        link: "https://www.aircon.panasonic.eu/PL_pl/",
      });
    } else {
      setPartnersShow("showNone");
    }
  };
  const handleClickGree = () => {
    if (partnersShow === "showNone") {
      setPartnersShow("showGree");
      setPartnerName({
        ...partnerName,
        name: "Gree",
        logo: <Gree />,
        motto:
          "Marka GREE to 30 lat doświadczenia w produkcji i dystrybucji klimatyzatorów na całym świecie",
        description:
          "Gree stale realizuje misję od „made in China” do „create in China”. Dzięki doskonałej jakości i niezawodności, nowoczesnym technologiom oraz dbałości o środowisko, Gree zapracowała na miano marki godnej zaufania. Klimatyzatory Gree są znane i cenione na całym świecie. Sprzedawane są w ponad 160 krajach, a liczba użytkowników przekracza 300 milionów osób. W Polsce obecne są od ponad 14 lat dzięki Free Polska – wyłącznemu importerowi klimatyzatorów marki Gree w Polsce.",
        link: "https://gree.pl/",
      });
    } else {
      setPartnersShow("showNone");
    }
  };

  const [partnerName, setPartnerName] = useState({
    name: "none",
    logo: "",
    motto: "money is not the only thing",
    description: "its everything",
    link: "#",
  });

  if (partnersShow === "showNone") {
    return (
      <>
        <ContainerLogos>
          <LinkPartners onClick={handleClickFuji}>
            <FujiElectric />
          </LinkPartners>
          <LinkPartners onClick={handleClickFujitsu}>
            <Fujitsu />
          </LinkPartners>
          <LinkPartners onClick={handleClickMitsubishi}>
            <Mitsubishi Electric />
          </LinkPartners>
          <LinkPartners onClick={handleClickSamsung}>
            <Samsung />
          </LinkPartners>
          <LinkPartners onClick={handleClickDaikin}>
            <Daikin />
          </LinkPartners>
          <LinkPartners onClick={handleClickLg}>
            <Lg />
          </LinkPartners>
          <LinkPartners onClick={handleClickPanasonic}>
            <Panasonic />
          </LinkPartners>
          <LinkPartners onClick={handleClickGree}>
            <Gree />
          </LinkPartners>
        </ContainerLogos>
      </>
    );
  } else {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        // variants={pageTransition}
        variants={pageVariants}
        transition={pageTransition}
      >
        <BigContainerDiv>
          <ResponsiveDiv>
            <LinkLogo href={partnerName.link}>{partnerName.logo}</LinkLogo>
            <h4>
              <Paragraph>{partnerName.motto}</Paragraph>
            </h4>{" "}
            <br />
            <Paragraph>{partnerName.description}</Paragraph>
            <LinkOne href="#" onClick={() => setPartnersShow("showNone")}>
              Powrót
            </LinkOne>
          </ResponsiveDiv>
        </BigContainerDiv>
      </motion.div>
    );
  }
};

export { AllTech };
