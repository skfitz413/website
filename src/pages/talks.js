import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled, {
    up,
    css,
    keyframes,
    Box,
    useColorMode, th,
} from '@xstyled/styled-components'
import {Seo} from '../containers/Seo'
import {ReviewCard} from '../components/ReviewCard'
import {SectionTitle, SectionDescription} from '../components/Section'
import {
    GrandParent,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    CardTitle,
} from '../components/Card'
import {PageContainer} from '../components/Container'

// https://svg2jsx.com/
import {RiderLogo} from '../components/RiderLogo'
import {SwaLogo} from '../components/SwaLogo'
import {MSBuildLogo} from '../components/MSBuildLogo'
import {NukeLogo} from '../components/NukeLogo'

const azureConf = {
    name: 'Azure Community Conference',
    slug: 'azure-community',
    link: 'https://azconf.dev/',
};

const dotnextConf = {
    name: 'DotNext Conference',
    slug: 'dotnext',
    link: 'https://dotnext.ru/en/',
};

const fwdaysConf = {
    name: '.NET fwdays',
    slug: 'fwdays',
    link: 'https://fwdays.com/en/',
};

const devopsProConf = {
    name: 'DevOps Pro Europe',
    slug: 'devops-pro-europe',
    link: 'https://devopspro.lt/',
};

const ndcOsloConf = {
    name: 'NDC Oslo',
    slug: 'ndc-oslo',
    link: 'https://ndcoslo.com/',
};

const ndcPortoConf = {
    name: 'NDC Porto',
    slug: 'ndc-porto',
    link: 'https://ndcporto.com/',
};

const dotnetConf = {
    name: '.NET Conf',
    slug: 'dotnet-conf',
    link: 'https://www.dotnetconf.net/',
};

const netfestConf = {
    name: '.NET Fest',
    slug: 'dotnet-fest',
    link: 'https://www.dotnetfest.com/',
};

const devDaysLt = {
    name: 'DevDays LT',
    slug: 'devdayslt',
    link: 'https://devdays.lt/',
};

const confooConf = {
    name: 'ConFoo',
    slug: 'confoo',
    link: 'https://confoo.ca/',
};

const dotfestConf = {
    name: 'DOT fest',
    slug: 'dotfest',
    link: 'https://dotfest.ru',
};

const rotation = keyframes`
  from {
    transform: translate(20%, 50%) perspective(200px) rotate(10deg);
  }

  to {
    transform: translate(20%, 50%) perspective(200px) rotate(-5deg) scale(0.95);
  }
`

const rotationMd = keyframes`
  from {
    transform: translate(20%, -32%) perspective(100px) rotate(10deg);
  }

  to {
    transform: translate(20%, -32%) perspective(200px) rotate(-5deg) scale(0.95);
  }
`

const AnimatedRiderLogo = styled(RiderLogo)`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 29%;
  height: auto;
  transform: translate(20%, 30%);
  animation: ${rotation} 5s ease-in-out infinite;
  animation-direction: alternate-reverse;
  ${up(
    'md',
    css`
      animation-name: ${rotationMd};
    `,
)}
`

const AnimatedSwaLogo = styled(SwaLogo)`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 30%;
  height: auto;
  transform: translate(20%, 30%);
  animation: ${rotation} 5s ease-in-out infinite;
  animation-direction: alternate-reverse;
  ${up(
    'md',
    css`
      animation-name: ${rotationMd};
    `,
)}
`

const AnimatedMSBuildLogo = styled(MSBuildLogo)`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 27%;
  height: auto;
  transform: translate(20%, 30%);
  animation: ${rotation} 5s ease-in-out infinite;
  animation-direction: alternate-reverse;
  ${up(
    'md',
    css`
      animation-name: ${rotationMd};
    `,
)}
`

const AnimatedNukeLogo = styled(NukeLogo)`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 50%;
  height: auto;
  transform: translate(20%, 30%);
  animation: ${rotation} 5s ease-in-out infinite;
  animation-direction: alternate-reverse;
  ${up(
    'md',
    css`
      animation-name: ${rotationMd};
    `,
)}
`

const TalkTitle = styled.h2`
  margin: 0;
  font-size: 50;
  color: lighter;
`

const ClientLogoImg = styled(Img)`
  &.mode-dark {
    filter: brightness(0) invert(1);
  }

  &.mode-light {
    filter: brightness(0);
  }
`

const shine = keyframes`
  0%, 20% { mask-position: -50%; }
  80%, 100% { mask-position: 150%; }
`

const ProjectTag = styled.p`
  font-size: normal;
  color: light400;

  color: accent;
  mask-image: linear-gradient(
    -75deg,
    rgba(0, 0, 0, 0.6) 30%,
    #000 50%,
    rgba(0, 0, 0, 0.6) 70%
  );
  mask-size: 200%;
  animation: ${shine} 3s linear infinite;

  a {
    transition: base;
    color: inherit;
    font-weight: bold;

    > svg {
      font-size: 18;
      vertical-align: middle;
    }

    &:hover {
      color: accent;
    }
  }
`

function Conferences({conferences, allConferences}) {
    const [colorMode] = useColorMode()

    return (
        <Box row m={-2} justifyContent="space-around">
            {conferences.map((conference) => {
                const logo = allConferences.edges.find((edge) =>
                    edge.node.relativePath.includes(conference.slug),
                )
                return (
                    <Box key={conference.slug} col="auto" p={2}>
                        <ClientLogoImg
                            className={`mode-${colorMode}`}
                            alt={conference.name}
                            fixed={logo.node.childImageSharp.fixed}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}

export default function Talks() {
    const data = useStaticQuery(graphql`
        query {
            conferences: allFile(filter: { relativePath: { glob: "conferences/*" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fixed(height: 20) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Seo title="Talks by Matthias Koch"/>
            <PageContainer>
                <SectionTitle>Talks</SectionTitle>
                <GrandParent>
                    <Card as="section" my={5} overflow="hidden">
                        <AnimatedRiderLogo/>
                        <CardHeader pr="40%">
                            <TalkTitle>JetBrains Rider</TalkTitle>
                            <p>The Cross-Platform .NET IDE from JetBrains</p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <CardTitle>Tips & Tricks for JetBrains Rider</CardTitle>
                                <p>
                                    Rider is based on JetBrains’ two flagship products – namely <strong>IntelliJ IDEA
                                    and ReSharper</strong>. Its multi-process architecture ensures a smooth typing
                                    experience.
                                </p>
                                <p>
                                    Features from the IDEA front-end include a mature
                                    VCS integration, local history support, run configurations, database integration,
                                    and thousands
                                    of plugins. Commonly known ReSharper features like quick-fixes, navigation,
                                    refactorings, and
                                    code inspections are also available. Beyond that, Rider includes a powerful
                                    debugger, on-the-fly
                                    decompilation, an Azure and AWS toolkit, support for SpecFlow and Avalonia, and much
                                    more.
                                </p>
                                <p>
                                    Come to this talk to learn about the most exciting development tools.
                                    Existing users are invited to get their knowledge boosted, to get even more out of
                                    their favorite IDE.
                                </p>
                            </div>
                        </CardBody>
                        {/*<CardFooter>*/}
                        {/*    <Conferences conferences={[ devDaysLt ]} allConferences={data.conferences}/>*/}
                        {/*</CardFooter>*/}
                    </Card>
                </GrandParent>
                <GrandParent>
                    <Card as="section" my={5} overflow="hidden">
                        <AnimatedSwaLogo />
                        <CardHeader pr="40%">
                            <TalkTitle>Static Web Apps</TalkTitle>
                            <p>Streamlined Full-Stack Development</p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <CardTitle>Developing and Deploying Static Web Apps with Blazor and Azure
                                    Functions</CardTitle>
                                <ProjectTag>
                                    Upcoming at&nbsp;
                                    <a href="https://confoo.ca" target="_blank">ConFoo.ca</a> on February 23rd and&nbsp;
                                    <a href="https://ndcport.com" target="_blank">NDC Porto</a> on April 27th!
                                </ProjectTag>
                                <p>
                                    Blazor brings C# to the browser. Azure Functions lets your back-end scale.
                                    But how do you get started creating an Azure Static Web App using these two
                                    and how do you implement a rock-solid CI/CD pipeline for it?
                                </p>
                                <p>
                                    We will walk through the whole process! Starting from writing and debugging
                                    your Blazor app and Functions API, we will also unit test our front and back-end
                                    and glue them together with the authentication service emulator for local
                                    development. For CI/CD and service management needs, like staging environments
                                    and user invitations, we will conclude with a scalable build pipeline that can
                                    be flexibly reused for your future projects!
                                </p>
                                <p>
                                    Come to this talk when you want to improve your development process with
                                    the best tooling in class and focus on the business value of your app!
                                </p>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Conferences conferences={[ azureConf, ndcPortoConf, dotnetConf, confooConf ]} allConferences={data.conferences}/>
                        </CardFooter>
                    </Card>
                </GrandParent>
                <GrandParent>
                    <Card as="section" my={5} overflow="hidden">
                        <AnimatedNukeLogo />
                        <CardHeader pr="40%">
                            <TalkTitle>NUKE</TalkTitle>
                            <p>Scalable and Maintainable Build Automation</p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <CardTitle>Build Automation Revolution</CardTitle>
                                <ProjectTag>
                                    Upcoming at&nbsp;
                                    <a href="https://confoo.ca" target="_blank">ConFoo.ca</a> on February 25rd!
                                </ProjectTag>
                                <p>
                                    Maintainable and scalable CI/CD pipelines are essential for being competitive
                                    and creating a great product. But why are most of us a little afraid of touching
                                    YAML files and don't even dare to look at build scripts? Much of this is because
                                    C# developers are spoiled with a great language and smart IDEs, and they don't
                                    like missing their buddy for code-completion, ease of debugging, refactorings,
                                    and code formatting.
                                </p>
                                <p>
                                    NUKE brings your build automation to an even level with every
                                    other .NET project. How? It's a regular console application allowing all the OOP
                                    goodness! Besides, it solves many common problems in build automation, like
                                    parameter injection, path separator abstraction, access to solution and project
                                    models, and build step sharing across repositories. To conclude your build
                                    revolution,
                                    NUKE can generate CI configurations (YAML, etc.) that automatically parallelize
                                    build steps on multiple agents to optimize throughput!
                                </p>
                                <p>
                                    Come to this talk to make your build scripts loveable!
                                </p>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Conferences conferences={[ dotnextConf, devopsProConf, fwdaysConf, ndcOsloConf, netfestConf, confooConf ]} allConferences={data.conferences}/>
                        </CardFooter>
                    </Card>
                </GrandParent>
                <GrandParent>
                    <Card as="section" my={5} overflow="hidden">
                        <AnimatedMSBuildLogo />
                        <CardHeader pr="40%">
                            <TalkTitle>MSBuild Tasks</TalkTitle>
                            <p>Extensions to the essential .NET Build System</p>
                        </CardHeader>
                        <CardBody>
                            <div>
                                <CardTitle>Implementing and Debugging Custom MSBuild Tasks</CardTitle>
                                <p>
                                    MSBuild is part of every .NET developer’s life when working with projects and
                                    solutions. It’s the system that ultimately invokes tools like the C# compiler or
                                    NuGet. Sometimes it makes sense to integrate additional tools into the MSBuild
                                    execution pipeline, also known as custom MSBuild tasks. However, implementing a
                                    custom task can be very daunting. Even advanced users are often running into issues
                                    when packaging, wiring up or debugging their task in the full MSBuild infrastructure.
                                    In this session, we’ll walk through my personal setup for implementing custom tasks
                                    and look at a few tricks and tools that can greatly simplify our efforts.
                                </p>
                                <p>
                                    Come to this talk for a complete walkthrough about extending MSBuild!
                                </p>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Conferences conferences={[ dotfestConf ]} allConferences={data.conferences}/>
                        </CardFooter>
                    </Card>
                </GrandParent>
            </PageContainer>
        </>
    )
}
