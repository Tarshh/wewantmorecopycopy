import React from "react"
import Layout from "../components/layout"
import tw from "tailwind.macro";
import SEO from "../components/seo"
import { Heading, HeadingStrong } from "../components/UI/Heading";
import { TextP } from "../components/UI/Text";
import logoInsideOut from '../images/logo_insideout.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Logo src={logoInsideOut} alt="InsideOut" />
    <OopsContainer>
      <OopsHeader>
        <Heading>
          <HeadingStrong>Woops!</HeadingStrong> Page not found.
        </Heading>
      </OopsHeader>
      <TextP>You just hit a route that doesn't exist... the sadness.</TextP>
    </OopsContainer>
  </Layout>
)

const OopsContainer = tw.div`
  max-w-xxl mx-auto my-20 px-3
`;

const OopsHeader = tw.div`
  mb-8
`;

const Logo = tw.img`
  mb-10 md:mt-16
`;

export default NotFoundPage
