import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import InfoBlock from "../components/Reusable/InfoBlock"
import HeroesSection from "../components/Reusable/HeroesSection"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from '../components/About/TeamPhotoSection'
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroesSection
      img={data.img.childImageSharp.fluid}
      title="About Learn Code Online"
      subtitle="LearnCodeOnline.in"
      heroclass="about-background"
    />
    <DualInfoBlock heading="A message from CEO" source="https://images.pexels.com/photos/3532559/pexels-photo-3532559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
    <InfoBlock heading="About vision" />
    <TeamPhotoSection/>
  </Layout>
) 

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
