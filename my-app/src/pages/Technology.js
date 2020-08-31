import React from "react";
import { Layout } from "../layout";
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
} from "../styles/boxColorStyles";

const Technology = () => {
  return (
    <Layout>
      <h1>Technology of today</h1>
      <LinkAbout href="#">Neon button</LinkAbout>
      <ContainerBoxSecond>
        <ContainerBox>
          <Box>
            <ContentBox>
              <ContentH2>1</ContentH2>
              <ContentH3>Part 1</ContentH3>
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
        </ContainerBox>
      </ContainerBoxSecond>
    </Layout>
  );
};
export default Technology;
