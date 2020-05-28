import React from "react";
import tw from "tailwind.macro";
import { Footer } from './UI/Footer';

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout

const Container = tw.div`
  bg-darkGrey md:px-0
`;
