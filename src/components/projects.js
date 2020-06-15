import React, { useState, useEffect } from "react"
import axios from "axios"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import projectStyles from "./styles/projects.module.css"

function Projects() {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/nigw95/repos?sort=updated`
      )
      setRepo(response.data)
    }
    getData()
  }, [])

  console.log(repo)
  return (
    <section id="projects">
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item xs={12}>
          <h3 className={projectStyles.projectsTitle}>My Projects</h3>
        </Grid>
        {repo.slice(0, 3).map(repo => (
          <Grid item key={repo.id} xs={12} md={6} lg={4} xl={4} align="center">
            <Paper
              elevation={3}
              className={projectStyles.paperStyle}
              style={{ background: "#414141" }}
            >
              <Grid direction="column" container>
                <Grid item align="center">
                  <i>
                    <h4>
                      <a
                        className={projectStyles.linkName}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {repo.name}
                      </a>
                    </h4>
                  </i>
                </Grid>
                <Grid item>
                  <h6 className={projectStyles.repoDescription}>
                    {repo.description}
                  </h6>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={12} xl={12}>
          <h4 className={projectStyles.viewMore}>
            Click{" "}
            <a
              href="https://github.com/nigw95?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className={projectStyles.viewLink}
            >
              HERE
            </a>{" "}
            to view all my other projects on Github!
          </h4>
        </Grid>
      </Grid>
    </section>
  )
}

export default Projects
