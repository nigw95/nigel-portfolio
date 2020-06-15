import React from "react"

import Layout from "../components/layout"
import Landing from "../components/landing"
import About from "../components/about"
import Skills from "../components/skills"
import Projects from "../components/projects"

import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>NigelW.tech | Home</title>
      </Helmet>
      <Landing />
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}
