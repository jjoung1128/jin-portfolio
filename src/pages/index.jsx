import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { colors } from '../../tailwind'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import profile from '../images/profile.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white font-serif pt-12 lg:pt-0 lg:pl-12 text-xl lg:text-2xl xl:text-3xl`};
`

const AboutDesc = styled.div`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-3 md:pt-6 text-justify`};
`

const AboutSkill = styled.div`
  ${tw`flex my-8`};
`

const AboutSkillName = styled.div`
  ${tw`w-1/6 h-12`};
`

const AboutSkillBar = styled.div`
  ${props => 
    props.level == 5 ? tw`w-5/6 h-10 rounded-lg`
    : props.level == 4 ? tw`w-2/3 h-10 rounded-lg`
    : props.level == 3 ? tw`w-1/2 h-10 rounded-lg`
    : props.level == 2 ? tw`w-1/3 h-10 rounded-lg`
    : tw`w-1/6 h-10 rounded-lg`
  }
  background: ${props => props.bg};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-lg md:text-xl lg:text-2xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello,<br /> I'm Jinwoong Joung.
        </BigTitle>
        <Subtitle>
        I'm an enthusiastic software engineer with strong team oriented character seeking innovative solutions to solve business problems
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="KAPCQ"
            link="https://quirky-hamilton-7bff02.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Responsive Church Website built with Gatsby & Netlify CMS
          </ProjectCard>
          <ProjectCard
            title="KAPCQ BOX"
            link="https://kapcqbox.org"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Attendance Management System for church members using Angular & Firebase
          </ProjectCard>
          <ProjectCard
            title="RETHINK FIRST"
            link="https://www.rethinkbehavioralhealth.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Healthcare platform that provides clinical tools, training and practice management solutions focused on behavioral health
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={profile} alt="Jinwoong Joung" />
          <AboutSub>
            Currently I work as a full stack developer for Rethink Fisrt in New York, NY. <br/>
            I have strong passion for developing simple and intuitive web applications for users by using cutting edge technologies.   
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <AboutSkill>
            <AboutSkillName>Angular</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #C02425 0%, #F0CB35 100%)" level="4"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>React</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #1c92d2 0%, #f2fcfe 100%)" level="3"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>JavaScript</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #FFE000 0%, #799F0C 100%)" level="4"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>TypeScript</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #2980b9 0%, #2c3e50 100%)" level="3"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>C#</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #8E2DE2 0%, #4A00E0 100%)" level="4"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>Java</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #b92b27 0%, #1565C0 100%)" level="3"></AboutSkillBar>
          </AboutSkill>
          <AboutSkill>
            <AboutSkillName>Python</AboutSkillName>
            <AboutSkillBar bg="linear-gradient(to right, #4DA0B0 0%, #D39D38 100%)" level="2"></AboutSkillBar>
          </AboutSkill>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:jinwoong.joung@gmail.com">Hi</a> or find me at:{' '}
            <a href="https://www.linkedin.com/in/jinwoongjoung/" target="_blank">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
        <a href="https://github.com/jjoung1128" target="_blank">Jinwoong Joung</a> &copy; 2019
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
