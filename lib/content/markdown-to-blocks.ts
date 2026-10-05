import type { PortableTextBlock } from "@portabletext/types"

let key = 0
function blockKey() {
  return `k${key++}`
}

/** Converts legacy markdown-ish blog bodies to Portable Text blocks for rendering. */
export function markdownToPortableText(body: string): PortableTextBlock[] {
  key = 0
  const blocks: PortableTextBlock[] = []
  const lines = body.split("\n")
  let listBuffer: string[] | null = null

  const flushList = () => {
    if (!listBuffer?.length) {
      listBuffer = null
      return
    }
    for (const item of listBuffer) {
      blocks.push({
        _type: "block",
        _key: blockKey(),
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [{ _type: "span", _key: blockKey(), text: item, marks: [] }],
      } as PortableTextBlock)
    }
    listBuffer = null
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushList()
      blocks.push({
        _type: "block",
        _key: blockKey(),
        style: "h2",
        markDefs: [],
        children: [{ _type: "span", _key: blockKey(), text: line.slice(3), marks: [] }],
      } as PortableTextBlock)
    } else if (line.startsWith("### ")) {
      flushList()
      blocks.push({
        _type: "block",
        _key: blockKey(),
        style: "h3",
        markDefs: [],
        children: [{ _type: "span", _key: blockKey(), text: line.slice(4), marks: [] }],
      } as PortableTextBlock)
    } else if (line.startsWith("- ")) {
      if (!listBuffer) listBuffer = []
      listBuffer.push(line.slice(2))
    } else if (line.trim() === "") {
      flushList()
    } else {
      flushList()
      blocks.push({
        _type: "block",
        _key: blockKey(),
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: blockKey(), text: line, marks: [] }],
      } as PortableTextBlock)
    }
  }
  flushList()
  return blocks
}
