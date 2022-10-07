import React from 'react'
import { ProjectsPageTemplate } from '../containers/Projects'

export default function ProjectsPage() {
  return (
    <ProjectsPageTemplate
      title="Projects"
      intro={
        <>
          Open source is a real passion and a way of thinking. My tools are used
          and trusted by <strong>thousands of developers</strong> all over the
          world.
        </>
      }
      projects={{
        nuke: {
          label: 'Build Automation System',
          title: 'NUKE',
          nuget: 'nuke.common',
          github: 'https://github.com/nuke-build/nuke',
          twitter: 'https://twitter.com/nukebuildnet',
          url: 'https://nuke.build',
          description: (
            <>
              NUKE is a <strong>modern build automation system</strong> that is tightly integrated with{' '}
              all modern IDEs and 
            </>
          ),
          tags: ['build', 'automation', 'ci/cd'],
          color: '#FF921B'
        },
        svgr: {
          label: 'Integrated in create-react-app',
          description: (
            <>
              SVGR transforms SVG into React Components. It is available as{' '}
              <a href="https://react-svgr.com/docs/cli/">CLI</a>,{' '}
              <a href="https://react-svgr.com/docs/webpack/">webpack</a>,{' '}
              <a href="https://react-svgr.com/docs/rollup/">webpack</a>,{' '}
              <a href="https://react-svgr.com/docs/node-api/">Node.js</a> or
              even <a href="https://react-svgr.com/playground/">online</a>. It
              is included in{' '}
              <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs">
                create-react-app
              </a>{' '}
              and has <strong>2M downloads by week</strong>.
            </>
          ),
        },
      }}
    />
  )
}
