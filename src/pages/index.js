import React from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}
