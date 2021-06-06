import { serve } from "./deps.ts";
import type { PathParams } from "./deps.ts";

import { search } from "./search.ts";

const searchHandler = async (_request: Request, params: PathParams) => {
    const query: string = params.query.toString();
    const response = await search(query);
    return response;
}

const servings = {
    "/search/:query": searchHandler
};

serve(servings);