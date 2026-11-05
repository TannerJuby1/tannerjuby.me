import { type ExtendedRecordMap } from 'notion-types'
import { mergeRecordMaps } from 'notion-utils'

/**
 * Navigation links are loaded with `chunkLimit: 1` and then cached.
 * Those copies must be merged underneath the fully loaded page so a nav
 * destination (Resume, Blog, Cookbook) keeps its complete current content.
 * `mergeRecordMaps` lets the second map win on conflicting block ids.
 */
export function mergeNavigationRecordMaps(
  recordMap: ExtendedRecordMap,
  navigationLinkRecordMaps: ExtendedRecordMap[]
): ExtendedRecordMap {
  return navigationLinkRecordMaps.reduce(
    (map, navigationLinkRecordMap) =>
      mergeRecordMaps(navigationLinkRecordMap, map),
    recordMap
  )
}
