import React from "react"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"

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
              <input name="name" type="name" placeholder="Name" />
              <input name="email" type="email" placeholder="Email" />
              <input type="hidden" name="form-name" value="contact" />
            </li>
            <li>
              <input name="purpose" type="purpose" placeholder="Title" />
              <textarea name="message" placeholder="Message"></textarea>
            </li>
            <li>
              <button>Send</button>
            </li>
          </ul>
        </form>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Link to="/" className={contactStyles.back}>
            Back to home
          </Link>
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactMe
