import { withTrailingSlash } from "ufo"

async function useTotalPostCount(path: string): Promise<number> {
  return queryContent(withTrailingSlash(path))
    .where({ _partial: false })
    .count()
}

export { useTotalPostCount }
