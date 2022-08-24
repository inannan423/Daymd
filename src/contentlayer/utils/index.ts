import type { DocumentGen } from 'contentlayer/core'
import * as promises from 'fs/promises'
import path from 'path'

import { CONTENT_DIR } from '../../configs/constants'

export const getLastEditedDate = async (doc: DocumentGen): Promise<Date> => {
  const stats = await promises.stat(
    path.join(CONTENT_DIR, doc._raw.sourceFilePath)
  )
  return stats.mtime
}

export const getLocale = (doc: DocumentGen) => {
  const subs = doc._raw.sourceFilePath.split('.')

  return subs.length > 2 ? subs.slice(-2)[0] : 'en'
}
