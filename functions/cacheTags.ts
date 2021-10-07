import type { Tag } from "../types/tag.ts";
// import { createClient } from "../deps.ts";
export const cacheTags =  async (tags: Tag[]): Promise<void> => {
    console.log("Caching tags");
    const supabaseURL = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_KEY");
    if (!supabaseURL || !supabaseKey) {
        console.error("Failed to acquire environment variables");
        return;
    }
    // const supabase = createClient(supabaseURL, supabaseKey);
    // const { data, error } = await supabase.from("tags_cache").insert(
    //     tags.map((t) => {
    //         return {
    //             "id": t.id,
    //             "json": JSON.stringify(t)
    //         }
    //     }),
    //     { upsert: true }
    // );
    const body = JSON.stringify(tags.map(t => {
        return {
            id: t.id,
            json: t
        }
    }));

    await fetch(supabaseURL + "/rest/v1/tags_cache", {
        method: "POST",
        headers: {
            "apikey": supabaseKey,
            "Authorization": "Bearer " + supabaseKey,
            "Content-Type": "application/json",
            "Prefer": "resolution=merge-duplicates"
        },
        body
    });

    return;
}