import { serve } from "./deps.ts";
import type { PathParams } from "./deps.ts";

import { search } from "./search.ts";
import { landing } from "./landing.ts";
import { tag } from "./tag.ts";

const searchHandler = async (_request: Request, params: PathParams) => {
    const query: string = params.query.toString();
    const response = await search(query);
    return response;
}

const tagHandler = async (_request: Request, params: PathParams) => {
    const id: number = parseInt(typeof params.id == "string" ? params.id : params.id[0]);
    const response = await tag(id);
    return response;
}

const servings = {
    "/search/:query": searchHandler,
    "/tag/:id": tagHandler,
    "/": landing
};

serve(servings);