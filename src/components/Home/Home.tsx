import React from 'react';
import tw from 'tailwind.macro';
import StyledButton from '../UI/Button';
import { Heading, HeadingStrong } from '../../components/UI/Heading';
import bustLarge from './../../images/bust-large.jpg';
import bustSmall from './../../images/bust-small.jpg';
import logoInsideOut from './../../images/logo_insideout.svg';
import logoIlot from './../../images/logo_ilot.svg';

export function Home() {
  return (
    <Container>
      <Logo src={logoInsideOut} alt="InsideOut" />
      <Content>
        <ContentInner>
          <Header>
            <Heading>
              <HeadingStrong>#StayHome.</HeadingStrong><br />
              But what if you <HeadingStrong>don't have</HeadingStrong> a home?
            </Heading>
          </Header>
          <SmallPhotoContainer>
            <IlotLogoSmall src={logoIlot} alt="logoIlot" />
            <SmallPhoto src={bustSmall} alt="bust" />
          </SmallPhotoContainer>
          <MaxW>
            <TextContainer>
              Over <strong>50.000 homeless</strong> in Belgium face this reality.
              And the COVID-19 crisis hasn’t made it any easier for them. We’re no
              experts, but <IlotLink href="http://ilot.be/nl" target="_blank">L’Ilot</IlotLink> is. They’re an organization
              offering a range of first line services, shelter and temporary
              accommodation to homeless people.
            </TextContainer>
            <TextContainer>
              While you’re probably longing to leave your
              home, they are struggling to support people without one. The world
              has turned inside out. But there’s an easy way to help.
            </TextContainer>
            <TextContainer>
              With a lot of you constantly in and out of video calls these days,
              backdrops have become the new billboard ads. So we asked creatives
              to address this issue in an artwork fit for a backdrop.
              Now let’s put them to good use.
            </TextContainer>
            <StyledList>
              <StyledListItem className="lidash">
                <strong>Download a backdrop.</strong>
              </StyledListItem>
              <StyledListItem className="lidash">
                <strong>Donate</strong>. Or don’t. Up to you. 10 euro goes a long
                way for L’Ilot, but we’d be thrilled if you could just mention them.
              </StyledListItem>
              <StyledListItem className="lidash">
                <strong>Install the backdrop</strong> in your video call app.
              </StyledListItem>
              <StyledListItem className="lidash">
                Bring it up in your next video call.
              </StyledListItem>
            </StyledList>
            <StyledButton onClick={() => window.open("https://ilot.iraiser.eu/b/mijn-donatie", "_blank")}>Donate now</StyledButton>
          </MaxW>
        </ContentInner>
      </Content>
      <BigPhoto style={{ backgroundImage: 'url(' + bustLarge + ')' }} >
        <IlotLogo src={logoIlot} alt="logoIlot" />
      </BigPhoto>
    </Container>
  )
};

const Container = tw.div`
  relative
`;

const Logo = tw.img`
  mb-10 md:mt-16
`;

const Content = tw.div`
  relative z-10 max-w-xxl mx-auto
`;

const ContentInner = tw.div`
  pr-50p pb-16 px-3
`;

const Header = tw.div`
  mb-10 max-w-xs lg:max-w-md
`;

const MaxW = tw.div`
  max-w-xs xl:max-w-md
`;

const TextContainer = tw.p`
  mb-4 text-lightGrey
  font-dmSans text-md
`;

const StyledList = tw.ul`
  ml-0 mb-6 list-none
`;

const StyledListItem = tw.li`
  ml-0 mb-2 font-dmSans text-lightGrey text-md
`;

const SmallPhotoContainer = tw.div`
  mx-0 my-10 -mx-3
  block md:hidden
`;

const SmallPhoto = tw.img`
  w-full
`;

const IlotLogoSmall = tw.img`
  absolute right-1 mt-2 md:hidden
`;

const BigPhoto = tw.div`
  absolute top-0 right-0 z-0 w-full h-full max-w-40p bg-cover bg-center bg-no-repeat
  border-0 border-l-2 border-lightGrey border-solid
  hidden md:block
`;

const IlotLogo = tw.img`
  absolute right-4 top-4 hidden md:block
`;

const IlotLink = tw.a`
  text-lightGrey hover:text-white cursor-pointer inline underline font-bold
`;