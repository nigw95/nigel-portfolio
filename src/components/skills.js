import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import skillStyles from "./styles/skills.module.css"

function Skills() {
  const data = useStaticQuery(graphql`
    {
      allMySkillsJson {
        edges {
          node {
            name
            description
            icon {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="skills">
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <h3 className={skillStyles.skillTitle}>My Skills</h3>
        </Grid>
        {data.allMySkillsJson.edges.map(({ node }) => (
          <Grid item key={node.name} xs={4} xl={2} align="center">
            <Paper
              variant="outlined"
              elevation={3}
              className={skillStyles.paperStyle}
              style={{ background: "#414141" }}
            >
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <span className={skillStyles.skillName}>
                    <Img
                      className={skillStyles.icon}
                      {...node.icon.childImageSharp}
                    />{" "}
                    {node.name}
                  </span>

                  <br />
                  <span className={skillStyles.skillDescription}>
                    {node.description}
                  </span>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Skills
