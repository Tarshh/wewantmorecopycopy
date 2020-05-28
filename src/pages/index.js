import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Home } from "../components/Home/Home";
import { ArtistGrid } from "../components/artistGrid/ArtistGrid";
import tw from "tailwind.macro";
import { Helmet } from "react-helmet";
import { Heading, HeadingStrong } from "../components/UI/Heading";
import { Text, TextP } from "../components/UI/Text";
import Prismic from "prismic-javascript";
import letterIcon from '../images/letterIcon.svg';

const apiEndpoint = process.env.GATSBY_PRISMIC_API_ENDPOINT;
const accessToken = process.env.GATSBY_PRISMIC_ACCESTOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken })

function IndexPage() {
  const [ zoomItems, setZoomItems ] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'zoomitem')
      )
      if (response) {
        setZoomItems(response.results)
      }
    }
    fetchData()
  }, [])

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="title" content="InsideOut" />
      </Helmet>
      <SEO title="Wewantmore" />
      <Home />
      <Artist>
        <ArtistHeading style={{ transform: 'translateY(1.2rem)' }}>Artworks</ArtistHeading>
      </Artist>
      <ArtistGrid zoomItems={zoomItems} />
      <InspiredContainer>
        <HeadingContainer>
          <Heading>
            Feeling <HeadingStrong>inspired?</HeadingStrong><br />
            <LetterIcon src={letterIcon} alt="letterIcon" /> Send us your own artworks and <HeadingStrong>contribute.</HeadingStrong>
          </Heading>
        </HeadingContainer>
        <TextContainer>
          <TextP>
            Send your artwork to <Link href="mailto:hello@insideout.art"><Text>art@insideout.land</Text></Link>
          </TextP>
          <TextP>
            Make sure your artwork complies to the following specifications:
          </TextP>
          <Text>
            It addresses the <strong>InsideOut topic</strong> in some way. Please, go all out.
          </Text><br />
          <Text>
            <strong>Image</strong> — 2:3 ratio // minimum 1620 x 1080 px // JPG or PNG-format // Max. 10Mb
          </Text>
          <TextP>
            <strong>Video</strong> — 2:3 ratio // minimum 1620 x 1080 px // MP4 or .Mov // Max. 20Mb
          </TextP> <br />
          <TextP>
            Want to get to know L’Ilot? Find out more on <Link href="https://www.ilot.be" target="_blank">www.ilot.be</Link>.
          </TextP>
        </TextContainer>
      </InspiredContainer>
    </Layout>
  )
};

export default IndexPage

const Artist = tw.div`
  max-h-textMax overflow-hidden border-0 md:border-b-2 md:border-t-2 border-lightGrey border-solid
`;

const ArtistHeading = tw.h1`
  block m-0 font-hairline text-7xl text-lightGrey text-dmSans
  w-full max-w-xxl mx-auto font-medium
`;

const InspiredContainer = tw.div`
  border-0 md:border-t-2 border-lightGrey border-solid
  pt-4 md:pt-10 pb-10 md:pb-32
`;

const HeadingContainer = tw.div`
  max-w-xxl mx-auto mb-10 px-3 text-center md:text-left
`;

const TextContainer = tw.div`
  max-w-xxl mx-auto px-3
`;

const Link = tw.a`
  no-underline border-0 border-b-2 border-lightGrey border-solid text-lightGrey hover:text-white
`;

const LetterIcon = tw.img`
  mb-0 w-10 md:w-auto
`;