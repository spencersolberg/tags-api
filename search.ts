import { parse, json } from "./deps.ts";
import type { Tag } from "./tag.ts";
export const search =  async (query: string): Promise<Response> => {
    const req = await fetch(`https://www.barbershoptags.com/api.php?Sortby=Downloaded&n=150&q=${query}`);
    return json(restructureTags(parse(await req.text())), {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}



const restructureTags = (data: any): Tag[] => {
    if (data?.tags?.tag?.length) {
        let tags = data.tags.tag.map((t: { id: any; Title: any; WritKey: string; Arranger: any; SungBy: any; Quartet: any; Teacher: any; Provider: any; Type: any; Parts: any; Rating: any; RatingCount: any; }) => new Object({

            id: t.id,
            title: t.Title,
            key: t.WritKey?.split(":")[1] ?? undefined,
            tonality: t.WritKey?.split(":")[0] ?? undefined,
            arranger: t.Arranger ?? t.SungBy ?? t.Quartet ?? t.Teacher ?? t.Provider ?? undefined,
            type: t.Type ?? undefined,
            parts: t.Parts ?? undefined,
            rating: t.Rating ?? undefined,
            ratingCount: t.RatingCount ?? undefined
        }));
        return tags;
    } else if (data?.tags?.tag) {
        let t = data.tags.tag;
        return [ {
            id: t.id,
            title: t.Title,
            key: t.WritKey?.split(":")[1] ?? undefined,
            tonality: t.WritKey?.split(":")[0] ?? undefined,
            arranger: t.Arranger ?? t.SungBy ?? t.Quartet ?? t.Teacher ?? t.Provider ?? undefined,
            type: t.Type ?? undefined,
            parts: t.Parts ?? undefined,
            rating: t.Rating ?? undefined,
            ratingCount: t.RatingCount ?? undefined
        }];
        
    }

    return [];
}