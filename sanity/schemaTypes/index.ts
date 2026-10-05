import { article } from "./article"
import { author } from "./author"
import { category } from "./category"
import { seo } from "./objects/seo"
import {
  caseStudy,
  changelogEntry,
  event,
  guide,
  industry,
  news,
  pressRelease,
  product,
  resource,
} from "./stubs"
import { topic } from "./topic"

export const schemaTypes = [
  seo,
  author,
  category,
  topic,
  article,
  news,
  changelogEntry,
  caseStudy,
  guide,
  resource,
  pressRelease,
  event,
  product,
  industry,
]
