import React from "react";
import tw from "tailwind.macro";
import { Text } from "../../components/UI/Text"
import instagramLogo from "./../../images/instagramLogo.svg";

export function Footer({ }) {
  return (
    <FooterBlock>
      <Initiative>
        <Text>
          An initiative supported by
          <FooterTextBold href="https://www.wewantmore.studio" target="_blank"> WeWantMore</FooterTextBold> and
          <FooterTextBold href="https://pointbreak.co" target="_blank"> Point Break</FooterTextBold>
        </Text>
      </Initiative>
      <CopyrightContainer>
        <Text>
          &copy;&nbsp;2020 <Link href="https://pointbreak.co" target="_blank">Point Break</Link>
        </Text>
        <Text>
          &copy;&nbsp;2020 <Link href="https://www.instagram.com/wewantmore.studio/" target="_blank">Wewantmore <InstagramLogo src={instagramLogo} /></Link>
        </Text>
      </CopyrightContainer>
      <TextContainer>
        <Text>
          The featured artworks are solely to be used as backgrounds for non-commercial purposes, and protected by the authors’ rights.
          Any other use, including commercial use or reselling is stricly forbidden.
        </Text>
      </TextContainer>
    </FooterBlock>
  )
}

const FooterBlock = tw.div`
  border-0 md:border-t-2 border-lightGrey border-solid
`
const Initiative = tw.div`
  max-w-xxl mx-auto mb-10 px-3
  my-10
`;

const FooterTextBold = tw.a`
  font-dmSans text-lightGrey hover:text-white font-bold no-underline
`;

const CopyrightContainer = tw.div`
  max-w-xxl mb-10 mx-auto px-3
  flex justify-between xl:mt-20 xl:pr-40
`;

const Link = tw.a`
  no-underline text-lightGrey hover:text-white
`;

const TextContainer = tw.div`
 max-w-xl mb-10 mx-auto px-3 xl:mt-20 xl:pr-40 xxl:mx-32
`;

const InstagramLogo = tw.img`
  -m-1 ml-1
`;
