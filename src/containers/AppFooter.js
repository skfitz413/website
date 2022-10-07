/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Link } from 'gatsby'
import styled, { Box } from '@xstyled/styled-components'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Location } from '@reach/router'
import { Container } from '../components/Container'
import { useLangKey, toEnglish, toGerman } from '../components/I18nContext'

const Copyright = styled.div`
  color: light400;
  font-size: 12;
  font-family: monospace;
`

const Socials = styled.div`
  margin-left: auto;
  margin-right: -2;
  display: flex;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44;
  width: 44;
  color: lighter;
  transition: base;

  &:hover,
  &:focus {
    outline: none;
    color: accent;
  }
`

const currentYear = new Date().getFullYear()

const locales = {
  en: {
    twitter: 'My Twitter profile',
    github: 'My GitHub profile',
    linkedin: 'My LinkedIn profile',
    email: 'Send me an email',
  },
  de: {
    twitter: 'Mein Twitter Profil',
    github: 'Mein GitHub Profil',
    linkedin: 'Mein LinkedIn Profil',
    email: 'Sende eine Email',
  },
}

export function AppFooter() {
  const langKey = useLangKey()
  const t = locales[langKey]
  return (
    <Container display="flex" alignItems="center" mt={4} pb={4}>
      <Copyright>Matthias Koch © {currentYear}. Theme by <a href="https://gregberge.com/">Greg Bergé</a>.</Copyright>
      <Socials>
        {/*<Location>*/}
        {/*  {({ location }) => (*/}
        {/*    <>*/}
        {/*      {langKey === 'en' && (*/}
        {/*        <SocialLink title="German" as={Link} to={toGerman(location)}>*/}
        {/*          <Box as="span" fontSize={20} role="img" aria-label="German">*/}
        {/*            🇩🇪*/}
        {/*          </Box>*/}
        {/*        </SocialLink>*/}
        {/*      )}*/}
        {/*      {langKey === 'de' && (*/}
        {/*        <SocialLink title="Englisch" as={Link} to={toEnglish(location)}>*/}
        {/*          <Box as="span" fontSize={20} role="img" aria-label="Englisch">*/}
        {/*            🇬🇧*/}
        {/*          </Box>*/}
        {/*        </SocialLink>*/}
        {/*      )}*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</Location>*/}
        <SocialLink title={t.twitter} href="https://twitter.com/matkoch87" target="_blank">
          <FaTwitter />
        </SocialLink>
        <SocialLink title={t.github} href="https://github.com/matkoch" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink title={t.linkedin} href="https://linkedin.com/in/matthias-koch-jb" target="_blank">
          <FaLinkedin />
        </SocialLink>
        <SocialLink title={t.email} href="mailto:ithrowexceptions@gmail.com">
          <FaEnvelope />
        </SocialLink>
      </Socials>
    </Container>
  )
}
