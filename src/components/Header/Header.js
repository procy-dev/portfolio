import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GiRingedPlanet } from 'react-icons/gi';

import { Anchor, Container, Div1, Div2, Div3, Li, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <Anchor>
          <GiRingedPlanet size="3rem" /> <Span>ChrisWinkler.dev</Span>
        </Anchor>
      </Link>
    </Div1>
    <Div2>
      <Li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link> 
      </Li>
      <Li>
        <Link href="#tech">
          <NavLink>Tech</NavLink>
        </Link>
      </Li>
      <Li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </Li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/procy-dev">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/chris-winkler">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/procyon.lotor4">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
