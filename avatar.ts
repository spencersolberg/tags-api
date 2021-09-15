import { json } from "./deps.ts";

export const avatar = async (request: Request): Promise<Response> => {
    if (request.method !== "POST") {
        return new Response(null, {
            status: 405,
            statusText: "Method Not Allowed",
        });
    }
    const upload = await request.blob();

    if (!["image/png", "image/jpeg", "image/jpg"].includes(upload.type)) return json({
        error: "Invalid file type (Use png, jpeg, or jpg)"
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });

    if (upload.size > 8000000) return json({
        error: "Uploaded file is too large (>8MB)"
    }, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });

    const url = "https://file.coffee/api/v1/upload";
    const form = new FormData();
    form.append("file", upload);
    const res = await fetch(url, {
        method: "POST",
        body: form
    });
    const data = await res.json();

    return json({
        file: data.file
    }, {
        headers: {
            "Access-Control-Allow-Origin" : "*"
        }
    });
}