import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section style={{ height: "fit-content" }} id="projects">
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <SectionText>
      These are some projects I've been working on to learn new skills as well as keep old ones fresh! Often inspired by others' projects with my own touch.
    </SectionText>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title={1}>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            {tags.length > 0 ? (
              <>
                <TitleContent>Tech</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </>
            ) : <div style={{ padding: '4.1em' }}/>}            
          </div>
          <UtilityList>
            {source && (<ExternalLinks href={source}>Source</ExternalLinks>)}            
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;