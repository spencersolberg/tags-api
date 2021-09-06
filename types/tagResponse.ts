import type { OriginalTag } from "./originalTag.ts"

export type TagResponse = {
    tags?: TagsDict
}

type TagsDict = {
    "@available"?: number | null,
    "@count"?: number | null,
    "@stamp"?: string | null,
    tag: OriginalTag | OriginalTag[]
}