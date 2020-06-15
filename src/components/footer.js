import React from "react"

import footerStyle from "./styles/footer.module.css"

const Footer = ({ title = "Nigel Wong" }) => {
  return (
    <footer className={footerStyle.footer}>
      <span>
        © {new Date().getFullYear()}, Built by {` `}
        <a
          className={footerStyle.linkDisplay}
          href="https://twitter.com/nigw95"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </span>
    </footer>
  )
}

export default Footer
