import { json } from "./deps.ts";
import { tag } from "./tag.ts";

export const tags = async (ids: number[], baseURL: string): Promise<Response> => {
    console.log("Finding tags for:", ids)
    const responses: Promise<Response>[] = ids.map(i => {
        return tag(i, baseURL);
    });

    const datas = await Promise.all(responses);

    const jsons: Promise<Record<string, unknown>>[] = datas.map(d => {
        return d.json();
    });

    const tags = await Promise.all(jsons);

    return json(tags, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}