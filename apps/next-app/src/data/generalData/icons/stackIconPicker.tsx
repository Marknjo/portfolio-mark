import { EStackFullNames } from '@data/types'

import { IconJavaScript } from './tech-stacks-icons/IconJavaScript'
import { IconApollo } from './tech-stacks-icons/IconApollo'
import { IconAstro } from './tech-stacks-icons/IconAstro'
import { IconCI } from './tech-stacks-icons/IconCI'
import { IconCSharp } from './tech-stacks-icons/IconCSharp'
import { IconCSS } from './tech-stacks-icons/IconCSS'
import { IconDocker } from './tech-stacks-icons/IconDocker'
import { IconDockerSwarm } from './tech-stacks-icons/IconDockerSwarm'
import { IconElectron } from './tech-stacks-icons/IconElectron'
import { IconExpress } from './tech-stacks-icons/IconExpress'
import { IconFigma } from './tech-stacks-icons/IconFigma'
import { IconGo } from './tech-stacks-icons/IconGo'
import { IconGraphQl } from './tech-stacks-icons/IconGraphQl'
import { IconHTML } from './tech-stacks-icons/IconHTML'
import { IconKubernetes } from './tech-stacks-icons/IconKubernetes'
import { IconMongo } from './tech-stacks-icons/IconMongo'
import { IconMVC } from './tech-stacks-icons/IconMVC'
import { IconNestJs } from './tech-stacks-icons/IconNestJs'
import { IconNextJs } from './tech-stacks-icons/IconNextJs'
import { IconNodejs } from './tech-stacks-icons/IconNodejs'
import { IconNuxt } from './tech-stacks-icons/IconNuxt'
import { IconPHP } from './tech-stacks-icons/IconPHP'
import { IconPostgres } from './tech-stacks-icons/IconPostgres'
import { IconPython } from './tech-stacks-icons/IconPython'
import { IconReact } from './tech-stacks-icons/IconReact'
import { IconSolidJs } from './tech-stacks-icons/IconSolidJs'
import { IconTailwind } from './tech-stacks-icons/IconTailwind'
import { IconVue } from './tech-stacks-icons/IconVue'
import { IconApi } from './tech-stacks-icons/IconApi'
import { IconMd } from './tech-stacks-icons/IconMd'
import { IconReactNative } from './tech-stacks-icons/IconReactNative'
import { IconVitest } from './tech-stacks-icons/IconVitest'
import { IconGithub } from './tech-stacks-icons/IconGithub'
import { IconDefault } from './tech-stacks-icons/IconDefault'
import { IconChakra } from './tech-stacks-icons/IconChakra'
import { IconRemix } from './tech-stacks-icons/IconRemix'
import { IconVite } from './tech-stacks-icons/IconVite'
import { IconTS } from './tech-stacks-icons/IconTS'

export function stackIconPicker(stackName: EStackFullNames) {
  switch (stackName) {
    case EStackFullNames.API:
      return IconApi

    case EStackFullNames.APOLLO:
      return IconApollo

    case EStackFullNames.ASTRO:
      return IconAstro

    case EStackFullNames.CHAKRA:
      return IconChakra

    case EStackFullNames.CI_CD:
      return IconCI

    case EStackFullNames.CSHARP:
      return IconCSharp

    case EStackFullNames.CSS:
      return IconCSS

    case EStackFullNames.DOCKER:
      return IconDocker

    case EStackFullNames.DOCKER_SWARM:
      return IconDockerSwarm

    case EStackFullNames.ELECTRON:
      return IconElectron

    case EStackFullNames.EXPRESS:
      return IconExpress

    case EStackFullNames.GIT:
      return IconGithub

    case EStackFullNames.FIGMA:
      return IconFigma

    case EStackFullNames.GO:
      return IconGo

    case EStackFullNames.GRAPHQL:
      return IconGraphQl

    case EStackFullNames.HTML:
      return IconHTML

    case EStackFullNames.KUBERNETES:
      return IconKubernetes

    case EStackFullNames.MARKDOWN:
      return IconMd

    case EStackFullNames.MONGODB:
      return IconMongo

    case EStackFullNames.MVC:
      return IconMVC

    case EStackFullNames.NEST_JS:
      return IconNestJs

    case EStackFullNames.NEXT_JS:
      return IconNextJs

    case EStackFullNames.NODE_JS:
      return IconNodejs

    case EStackFullNames.NUXT:
      return IconNuxt

    case EStackFullNames.PHP:
      return IconPHP

    case EStackFullNames.POSTGRES:
      return IconPostgres

    case EStackFullNames.PYTHON:
      return IconPython

    case EStackFullNames.REACT:
      return IconReact

    case EStackFullNames.REACT_NATIVE:
      return IconReactNative

    case EStackFullNames.REMIX:
      return IconRemix

    case EStackFullNames.SOLID_JS:
      return IconSolidJs

    case EStackFullNames.TAILWIND:
      return IconTailwind

    case EStackFullNames.TYPESCRIPT:
      return IconTS

    case EStackFullNames.VITE:
      return IconVite

    case EStackFullNames.VITEST:
      return IconVitest

    case EStackFullNames.VUE:
      return IconVue

    case EStackFullNames.JAVASCRIPT:
      return IconJavaScript

    default:
      return IconDefault
  }
}
