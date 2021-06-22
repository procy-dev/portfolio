import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World, <br />
        Pleasure to Meet You!
      </SectionTitle>
      <SectionText>
        I'm Chris Winkler, a Software Engineer specializing in Front-End development with experience in Back-End technologies to compliment.
        With over 10 years of programming experience and 4 years in the software industry, I strive for efficiency and excellent user experience!
      </SectionText>
      <Button onClick={() => window.location.href='/#about'} >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;