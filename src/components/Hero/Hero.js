import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World, <br />
        Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        I am a Software Engineer specializing in Front-End development with experience in the Back-End technologies to compliment
        With over 10 years of programming experience and 4 years in the software industry, I strive for efficiency and excellent user experience!
      </SectionText>
      <Button href="#projects" >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;