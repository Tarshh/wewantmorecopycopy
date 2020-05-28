import React from 'react';
import tw from 'tailwind.macro';

export function Text({ children }) {
  return (
    <StyledText>{children}</StyledText>
  );
}

const StyledText = tw.span`
  inline font-dmSans text-md text-currentColor
`;

export function TextP({ children }) {
  return (
    <StyledP>{children}</StyledP>
  );
}

const StyledP = tw.p`
  font-dmSans text-md mb-4
`;
