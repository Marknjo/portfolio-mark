const rootDir = new URL(import.meta.url).pathname
  .split(':')
  .at(-1)
  ?.replace('lib/rootDir.ts', '')

export default rootDir as string
