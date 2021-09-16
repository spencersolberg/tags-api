import { serve } from "./deps.ts";
import type { PathParams } from "./deps.ts";

import { search } from "./search.ts";
import { landing } from "./landing.ts";
import { tag } from "./tag.ts";
import { download } from "./download.ts";
// import { image } from "./image.ts";
import { avatar } from "./avatar.ts";
import { tags } from "./tags.ts";

const searchHandler = async (request: Request, params: PathParams) => {
    const query: string = params.query.toString();
    const requestURL: URL = new URL(request.url);
    const baseURL: string = requestURL.protocol + "//" + requestURL.host;
    const response = await search(query, baseURL);
    return response;
}

const tagHandler = async (request: Request, params: PathParams) => {
    const id: number = parseInt(typeof params.id == "string" ? params.id : params.id[0]);
    const requestURL: URL = new URL(request.url);
    const baseURL: string = requestURL.protocol + "//" + requestURL.host;
    const response = await tag(id, baseURL);
    return response;
}

const downloadHandler = async (_request: Request, params: PathParams) => {
    const id: number = parseInt(typeof params.id == "string" ? params.id : params.id[0]);
    const name: string = params.name.toString();
    const response = await download(id, name);
    return response;
}

// const imageHandler = async (_request: Request, params: PathParams) => {
//     const id: number = parseInt(typeof params.id == "string" ? params.id : params.id[0]);
//     const response = await image(id);
//     return response;
// }

const avatarHandler = async (request: Request) => {
    const response = await avatar(request);
    return response;
}

const tagsHandler = async (request: Request, params: PathParams ) => {
    const ids: number[] = typeof params.ids == "string" ? params.ids.split(",").map(i => { return parseInt(i); }) : [150];
    const requestURL: URL = new URL(request.url);
    const baseURL: string = requestURL.protocol + "//" + requestURL.host;
    const response = await tags(ids, baseURL);
    return response;
}

const servings = {
    "/search/:query": searchHandler,
    "/tag/:id": tagHandler,
    "/download/:id/:name": downloadHandler,
    // "/image/:id": imageHandler,
    "/avatar": avatarHandler,
    "/tags/:ids": tagsHandler,
    "/": landing
};

serve(servings);