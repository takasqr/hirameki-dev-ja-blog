import { getSiteTitle } from "./getSiteTitle"

export function getPageTitle(title: string, path: string): string {
  const siteTitle = getSiteTitle(path)

  if (title !== siteTitle) {
    return `${title} | ${siteTitle}`
  }
  else {
    return siteTitle
  }
}
  