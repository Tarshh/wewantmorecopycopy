import React from 'react';
import tw from 'tailwind.macro';
import { Text, TextP } from '../../components/UI/Text'
import { HeadingStrong } from './Heading';
import StyledButton from '../UI/Button';
import close from './../../images/close.svg'

export default function Alert({ setAlert }) {
  return (
    <Container>
      <Inner>
        <Close onClick={() => setAlert(false)} src={close} />
        <HeaderContainer>
          <HeadingStrong >Thank you!</HeadingStrong>
        </HeaderContainer>
        <TextContainer>
          <TextP><strong>Your download has started.</strong></TextP>
        </TextContainer>
        <Line />
        <TextContainer>
          <Text>Feel free credit the creator or make a donation to L’Ilot.</Text>
        </TextContainer>
        <StyledButton onClick={() => window.open("https://ilot.iraiser.eu/b/mijn-donatie", "_blank")}>Donate now</StyledButton>
      </Inner>
    </Container>
  );
}

const Container = tw.div`
  flex w-full h-screen z-30 fixed top-0 left-0 bg-darkGreyRgba items-center justify-center 
`;

const Inner = tw.div`
   h-1/2 absolute px-10 py-10 max-w-md bg-darkGrey shadow-xl rounded w-full
`;

const Close = tw.img`
  absolute top-1 right-1 cursor-pointer
`;

const HeaderContainer = tw.div`
  mt-10
`;

const Line = tw.div`
  border border-lightGrey border-solid -mx-10
`;

const TextContainer = tw.div`
  my-8
`;