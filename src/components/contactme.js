import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import contactStyles from "./styles/contactme.module.css"

function ContactMe() {
  return (
    <section className={contactStyles.sectionPadding}>
      <Grid
        direction="column"
        justify="center"
        alignItems="center"
        container
        spacing={3}
      >
        <Grid item xs={12} xl={12} className={contactStyles.contactTitle}>
          Contact Me!
        </Grid>
        <form
          className={contactStyles.gridForm}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <ul>
            <li>
              <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </li>
            <li>
              <input type="purpose" placeholder="Title" />
              <textarea placeholder="Message"></textarea>
            </li>
            <li>
              <button>Send</button>
            </li>
          </ul>
        </form>
      </Grid>
    </section>
  )
}

export default ContactMe