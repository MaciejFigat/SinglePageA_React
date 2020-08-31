import React, { useState } from "react";
import { Layout } from "../layout";
import Air from "../components/svg/Air";
import Vent from "../components/svg/Vent";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import {
  ContainerBox,
  Box,
  ContentBox,
  ContentH3,
  Paragraph,
  Link,
  ContentH2,
  LinkAbout,
  ContainerBoxSecond,
  ContainerBoxShow,
  GridCenter,
} from "../styles/boxColorStyles";
const Home = () => {
  const [showHomeEl, setShowHomeEl] = useState("showNone");

  const handleClickOne = () => {
    if (showHomeEl === "showNone") {
      setShowHomeEl("showFirst");
    } else if (showHomeEl === "showSecond") {
      setShowHomeEl("showFirst");
    } else {
      setShowHomeEl("showNone");
    }
    console.log(showHomeEl);
  };
  const handleClickTwo = () => {
    if (showHomeEl === "showNone") {
      setShowHomeEl("showSecond");
    } else if (showHomeEl === "showFirst") {
      setShowHomeEl("showSecond");
    } else {
      setShowHomeEl("showNone");
    }
    console.log(showHomeEl);
  };

  if (showHomeEl === "showNone") {
    return (
      <Layout>
        <ContainerBoxSecond>
          <GridCenter>
            <LinkAbout onClick={handleClickOne}>Wentylacja</LinkAbout>
            <LinkAbout onClick={handleClickTwo}>Klimatyzacja</LinkAbout>
          </GridCenter>
        </ContainerBoxSecond>
      </Layout>
    );
  } else if (showHomeEl === "showFirst") {
    return (
      <Layout>
        <LinkAbout onClick={handleClickOne}>
          <Vent />
        </LinkAbout>
        <LinkAbout onClick={handleClickTwo}>
          <Air />
        </LinkAbout>
        <ContainerBoxShow>
          <Box>
            <ContentBox>
              <ContentH2 onClick={handleClickOne}>
                <Vent />
              </ContentH2>
              <ContentH3>Wentylacja</ContentH3>
              <Paragraph>Common Merganser</Paragraph> <br />
              <Paragraph>
                The common merganser or goosander is a large seaduck of rivers
                and lakes in forested areas of Europe, the northern and central
                Palearctic, and North America. The common merganser eats fish
                and nests in holes in trees.
              </Paragraph>
              <Link href="#">More information</Link>
            </ContentBox>
          </Box>
        </ContainerBoxShow>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <LinkAbout onClick={handleClickOne}>
          <Vent />
        </LinkAbout>
        <LinkAbout onClick={handleClickTwo}>
          <Air />
        </LinkAbout>
        <ContainerBoxShow>
          <Box>
            <ContentBox>
              <ContentH2 onClick={handleClickTwo}>
                <Air />
              </ContentH2>
              <ContentH3>Klimatyzacja</ContentH3>
              <Paragraph>Common Merganser</Paragraph> <br />
              <Paragraph>
                The common merganser or goosander is a large seaduck of rivers
                and lakes in forested areas of Europe, the northern and central
                Palearctic, and North America. The common merganser eats fish
                and nests in holes in trees.
              </Paragraph>
              <Link href="#">More information</Link>
            </ContentBox>
          </Box>
        </ContainerBoxShow>
      </Layout>
    );
  }
};

export default Home;
