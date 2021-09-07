import { parse, json } from "./deps.ts";
import { restructureTags } from "./functions/restructureTags.ts";
import type { OriginalTag } from "./types/originalTag.ts";
import type { TagResponse } from "./types/tagResponse.ts";

export const search =  async (query: string, baseURL: string): Promise<Response> => {
    const req = await fetch(`https://www.barbershoptags.com/api.php?Sortby=Downloaded&n=150&q=${query}`);
    const res = await req.text();
    const data = parse(res);
    const dataTags = data as TagResponse;
    if (dataTags.tags?.tag) { 
        const originalTags: OriginalTag | OriginalTag[] = dataTags.tags?.tag;
        
        return json(restructureTags(originalTags, baseURL), {
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
