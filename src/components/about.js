import React from "react"
import Grid from "@material-ui/core/Grid"
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import IconButton from "@material-ui/core/IconButton"

import aboutStyles from "./styles/about.module.css"

const links = [
  {
    name: "Facebook",
    path: "https://www.facebook.com/nigelwong95",
    icon: FaFacebook,
    color: "#4267B2",
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/nigelwong1995/",
    icon: FaLinkedin,
    color: "#2867B2",
  },
  {
    name: "Twitter",
    path: "https://twitter.com/nigw95",
    icon: FaTwitter,
    color: "#00acee",
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com/nig_w/",
    icon: FaInstagram,
    color: "#C13584",
  },
]

function About() {
  return (
    <section id="aboutme">
      <Grid
        direction="column"
        align-content="center"
        justify="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item xl={6} sm={9} xs={8}>
          <h4 className={aboutStyles.aboutDisplay}>
            Hey there! My name is Nigel, I'm 25 years young this year and I am
            from Singapore! I've graduated from University of Wollongong in Dec
            2019 with a Bachelors Degree in Computer Science - Digital Systems
            Security. I've also graduated from Singapore Polytechnic with a
            Diploma in Financial Informatics.
          </h4>
          <h4 className={aboutStyles.aboutDisplay}>
            In my free time, I generally like to play games, and catch up on my
            favourite TV shows, like 'The Walking Dead'. Recently, I've decided
            to set aside more time for self improvement, for example learning
            new skills, such as web development, to create the site that you are
            on now! Although I am still a beginner, I wish to be able to create
            something useful and interesting in the future.
          </h4>
          <br />
          <b className={aboutStyles.aboutDisplay}>
            <u>
              Currently, I am employed at Infosys Singapore as a Systems Engineer!
            </u>
          </b>
          <h4 className={aboutStyles.aboutDisplay}>
            You can find me on the following social media -
          </h4>
          <Grid
            container
            item
            direction="row"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            {links.map(social => {
              const Icon = social.icon
              return (
                <Grid item key={social.name}>
                  <IconButton
                    style={{ color: `${social.color}` }}
                    href={social.path}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </IconButton>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}

export default About
