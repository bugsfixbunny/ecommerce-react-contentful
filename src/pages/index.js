import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import InfoBlock from "../components/Reusable/InfoBlock"
import HeroesSection from "../components/Reusable/HeroesSection"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import Coursecart from "../components/cart/Coursecart"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroesSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <InfoBlock heading="About us" />
    <Coursecart cour={data.courses}/>
    <DualInfoBlock heading="Our Team" source="https://images.pexels.com/photos/3532559/pexels-photo-3532559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
  </Layout>
) 

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          titile
          price
          category
          description {
            description
          }
          image{
            fixed(width:200,height:120){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
