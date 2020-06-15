import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Typist from "react-typist"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"

import landingStyles from "./styles/landing.module.css"

function Landing() {
  const image = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "images/dp.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={landingStyles.sectionPadding}>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item lg={12} xl={12} xs={12}>
          <Img
            className={landingStyles.displayImage}
            {...image.photo.childImageSharp}
          />
        </Grid>
        <h1 className={landingStyles.name}>Nigel Wong</h1>
        <Typist cursor={{ show: false }}>
          <code>
            <span className={landingStyles.welcome}>Welcome to my site!</span>
          </code>
        </Typist>
        <h4 className={landingStyles.menuDisplay}>
          <span
            className={landingStyles.scrollButton}
            onClick={() => scrollTo("#aboutme")}
          >
            About
          </span>{" "}
          |{" "}
          <span
            className={landingStyles.scrollButton}
            onClick={() => scrollTo("#skills")}
          >
            Skills
          </span>{" "}
          |{" "}
          <span
            className={landingStyles.scrollButton}
            onClick={() => scrollTo("#projects")}
          >
            Projects
          </span>{" "}
          |{" "}
          <span className={landingStyles.scrollButton}>
            <Link to="/contact" className={landingStyles.ctcLink}>
              Contact
            </Link>
          </span>
        </h4>
      </Grid>
    </section>
  )
}

export default Landing
