import React, { ReactNode } from 'react';
import tw from 'tailwind.macro';

type Props = {
  children: ReactNode | string
}

export function Heading({ children }: Props) {
  return (
    <HeadingWrapper>
      {children}
    </HeadingWrapper>
  )
}

export function HeadingStrong({ children }: Props) {
  return (
    <HeadingInner>
      {children}
    </HeadingInner>
  )
}

const HeadingWrapper = tw.h1`
  font-dmSans text-lightGrey font-hairline leading-none
  text-5xl md:text-6xl lg:text-7xl
  m-0 max-w-xl
`;

const HeadingInner = tw.strong`
  font-rakkas font-normal
  text-5.5xl md:text-6.5xl lg:text-7.5xl
`;
