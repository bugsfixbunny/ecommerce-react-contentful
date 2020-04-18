import React from "react"
import BackgroundImage from "gatsby-background-image"

function HeroesSection({ img, heroclass, title, subtitle }) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      <h1 className="text-white display-4 text-uppercase text-center">
        {title}
      </h1>
      <div>
        <h4 className="text-warning">{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}

export default HeroesSection
