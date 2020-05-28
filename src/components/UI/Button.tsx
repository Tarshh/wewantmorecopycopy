import React from 'react';
import tw from 'tailwind.macro';


export default function StyledButton({ children, ...props }) {
  return (
    <Button {...props}>{children}</Button>
  )
}

const Button = tw.button`
  font-dmSans bg-lightGrey cursor-pointer rounded-full p-1 px-2 mx-auto flex
  shadow-none outline-none border-none hover:bg-white
`;
