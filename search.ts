import { parse, json } from "./deps.ts";

export const search =  async (query: string): Promise<Response> => {
    const req = await fetch(`https://www.barbershoptags.com/api.php?q=${query}`);
    return json(parse(await req.text()), {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}