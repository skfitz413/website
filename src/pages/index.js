import React from 'react'
import { graphql } from 'gatsby'
import { SectionTitle } from '../components/Section'
import { Container } from '../components/Container'
import { Hero, HeroIntro, HeroTitle, HeroTeaser } from '../containers/Hero'
import { LatestArticles } from '../containers/LatestArticles'
import { Seo } from '../containers/Seo'

export default function IndexPage({ data }) {
  return (
    <>
      <Hero>
        <Seo />
        <HeroIntro>Hi, my name is</HeroIntro>
        <HeroTitle>
          <strong>Matthias.</strong>
          <br />I help people develop with pleasure.
        </HeroTitle>
        <HeroTeaser>
          I am a software engineer based in Munich.
          I work as a developer advocate at JetBrains for all the .NET things.
          I am also the creator of NUKE – a modern build automation system. 
        </HeroTeaser>
      </Hero>
      <Container as="section" pb={5}>
        <SectionTitle as="h2">Blog</SectionTitle>
        <LatestArticles edges={data.allMdx.edges} />
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($langKey: String!) {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fields: { langKey: { eq: $langKey } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            link
          }
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
