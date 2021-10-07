import { json } from "./deps.ts";
import { tag } from "./tag.ts";
import { cacheTags } from "./functions/cacheTags.ts";
import type { Tag } from "./types/tag.ts";

export const tags = async (ids: number[], baseURL: string): Promise<Response> => {
    console.log("Finding tags for:", ids)
    const responses: Promise<Response>[] = ids.map(i => {
        return tag(i, baseURL);
    });

    const datas = await Promise.all(responses);

    const jsons: Promise<Tag>[] = datas.map(d => {
        return d.json();
    });

    const tags: Tag[] = await Promise.all(jsons);
    cacheTags(tags);
    return json(tags, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}