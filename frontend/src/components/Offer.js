import React from "react";
import { Layout } from "../layout";
import Air from "./svg/Air";
import Vent from "./svg/Vent";
import { AnimatePresence, motion } from "framer-motion";

import {
  ContainerBox,
  Box,
  ContentBox,
  ContentH3,
  Paragraph,
  Link,
  Link2,
  ContentH2,
  LinkAbout,
  ContainerBoxSecond,
  ContainerBoxShow,
  GridCenter,
  LinkAboutSecondary,
  BoxSecondary,
  LinkAboutSubtle,
} from "../styles/boxColorStyles";
import {
  ResponsiveDiv,
  BigContainerDiv,
  ContainerLogos,
  LinkOne,
  H2,
} from "../styles/responsiveContainer";

//this one is for Framer Motion variables
// const pageVariants = {
//   in: {
//     opacity: 1,
//     x: 0,
//   },
//   out: {
//     opacity: 0,
//     x: "-100vw",
//   },
// };
// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 1,
// };
const pageVariants = {
  in: {
    opacity: 1,
    // x: 0,
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

const OfferOne = ({ handleClickOne }) => {
  return (
    <BigContainerDiv>
      <ResponsiveDiv>
        <H2 onClick={handleClickOne}>
          <Vent />
        </H2>
        <h3>Wentylacja</h3>
        <h4>Znaczenie dla zdrowia</h4> <br />
        <Paragraph>
          Zbyt wysokie stężenie CO2 w powietrzu bezpośrednio wpływa na
          pojawienie się uczucia zmęczenia, obniżenie koncentracji oraz
          percepcji. Przy wartościach powyżej 2500ppm jest niebezpieczna dla
          zdrowia.
        </Paragraph>
        <Paragraph>
          Wentylacja grawitacyjna, w budownictwie mieszkalnym, oraz mechaniczna
          np. w biurowcach, ma za zadanie dostarczyć powietrze odpowiedniej
          jakości dla użytkowników pomieszczeń.
        </Paragraph>
        <Paragraph>
          Poza profesjonalnym montażem, niezbędne jest dokonywanie okresowych
          przeglądów, serwisów i pomiarów systemów wentylacyjnych.
        </Paragraph>
        <Paragraph>
          Dodatkowe zagrożenie stanowią bakterie i grzyby. Mogą one znajdować
          się w zabrudzonych przewodach wentylacyjnych. Może to być przyczynkiem
          wielu groźnych chorób płuc, skóry, oczu, a nawet sprzyjać powstawaniu
          nowotworów.
        </Paragraph>
        <LinkOne href="#" onClick={handleClickOne}>
          Więcej informacji
        </LinkOne>
      </ResponsiveDiv>
    </BigContainerDiv>
  );
};
const OfferTwo = ({ handleClickTwo }) => {
  return (
    <BigContainerDiv>
      <ResponsiveDiv>
        <H2 onClick={handleClickTwo}>
          <Air />
        </H2>
        <h3>Klimatyzacja</h3>
        <Paragraph>Common Merganser</Paragraph> <br />
        <Paragraph>
          The common merganser or goosander is a large seaduck of rivers and
          lakes in forested areas of Europe, the northern and central
          Palearctic, and North America. The common merganser eats fish and
          nests in holes in trees.
        </Paragraph>
        <LinkOne href="#" onClick={handleClickTwo}>
          More information
        </LinkOne>
      </ResponsiveDiv>
    </BigContainerDiv>
  );
};

export { OfferTwo, OfferOne };
// export default OfferOne, OfferTwo;
