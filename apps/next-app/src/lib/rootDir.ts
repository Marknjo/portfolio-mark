const rootDir = new URL(import.meta.url).pathname
  .split(':')
  .at(-1)
  ?.replace('src/lib/rootDir.ts', '')

export default rootDir as string
