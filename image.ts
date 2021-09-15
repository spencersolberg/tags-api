export const image = async (id: number): Promise<Response> => {
    const src = `https:\/\/tags.api.town\/download\/${id}\/SheetMusic`;
    console.log(src);
    const job = {
        application_id: "1iehqKQlrD_0u5mN5O3jYwQ",
        src,
        functions: [
            {
                name: "annotate",
                params: {
                    text: " "
                },
                save: {
                    image_identifier: id
                }
            }
        ]
    };
    const body = new FormData();
    body.append("json", JSON.stringify(job));
    const url = "https://api.blitline.com/job";
    const res = await fetch(url, {
        method: "POST",
        body
    });
    const data = await res.text();

    return new Response(data, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}