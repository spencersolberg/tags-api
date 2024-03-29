import { parse, json } from "./deps.ts";
import { restructureTags } from "./functions/restructureTags.ts";
import { cacheTags } from "./functions/cacheTags.ts";
import type { OriginalTag } from "./types/originalTag.ts";
import type { TagResponse } from "./types/tagResponse.ts";

export const tag =  async (id: number, baseURL: string): Promise<Response> => {
    const req = await fetch(`https://www.barbershoptags.com/api.php?id=${id}`);
    const res = await req.text();
    const data = parse(res);
    const dataTags = data as TagResponse;
    if (dataTags.tags?.tag) { 
        const originalTag: OriginalTag | OriginalTag[] = dataTags.tags?.tag;
        const tag = restructureTags(originalTag, baseURL);
        cacheTags(tag);
        return json(tag[0], {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    return json({
        error: true,
        message: "Unable to fetch tag"
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}