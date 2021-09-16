import type { Tag, Video } from "../types/tag.ts";
import type { OriginalTag, OldVideo } from "../types/originalTag.ts";

export const restructureTags = (tags: OriginalTag | OriginalTag[], baseURL: string): Tag[] => {
    if (!Array.isArray(tags)) {
        tags = [ tags ];
    }

    const restructuredTags: Tag[] =[];

    for (const tag of tags) {
        restructuredTags.push({
            id: tag.id,
            title: tag.Title,
            altTitle: tag.AltTitle ?? undefined,
            version: tag.Version ?? undefined,
            key: tag.WritKey?.split(":")[1] ?? undefined,
            tonality: tag.WritKey?.split(":")[0] ?? undefined,
            parts: tag.Parts ?? undefined,
            type: tag.Type ?? undefined,
            recording: tag.Recording ?? undefined,
            teachVid: tag.TeachVid ?? undefined,
            lyrics: tag.Lyrics ?? undefined,
            notes: tag.Notes ?? undefined,
            arranger: tag.Arranger ?? undefined,
            arrangerWebsite: tag.ArrWebsite ?? undefined,
            arranged: tag.Arranged ?? undefined,
            sungBy: tag.SungBy ?? undefined,
            sungWebsite: tag.SungWebsite ?? undefined,
            sungYear: tag.SungYear ?? undefined,
            quartet: tag.Quartet ?? undefined,
            quartetWebsite: tag.QWebsite ?? undefined,
            teacher: tag.Teacher ?? undefined,
            teacherWebsite: tag.TWebsite ?? undefined,
            provider: tag.Provider ?? undefined,
            providerWebsite: tag.ProvWebsite ?? undefined,
            posted: tag.Posted,
            classic: tag.Classic ?? undefined,
            collection: tag.Collection ?? undefined,
            rating: tag.Rating ?? undefined,
            ratingCount: tag.RatingCount ?? undefined,
            downloaded: tag.Downloaded,
            stamp: tag.stamp,
            sheetMusicAlt: tag.SheetMusicAlt ?? undefined,
            sheetMusic: tag.SheetMusic ? restructureFile(tag.id, baseURL, "SheetMusic", tag.SheetMusic) : undefined,
            notation: tag.Notation ? restructureFile(tag.id, baseURL, "Notation", tag.Notation) : undefined,
            allParts: tag.AllParts ? restructureFile(tag.id, baseURL, "AllParts", tag.AllParts) : undefined,
            bass: tag.Bass ? restructureFile(tag.id, baseURL, "Bass", tag.Bass) : undefined,
            bari: tag.Bari ? restructureFile(tag.id, baseURL, "Bari", tag.Bari) : undefined,
            lead: tag.Lead ? restructureFile(tag.id, baseURL, "Lead", tag.Lead) : undefined,
            tenor: tag.Tenor ? restructureFile(tag.id, baseURL, "Tenor", tag.Tenor) : undefined,
            other1: tag.Other1 ? restructureFile(tag.id, baseURL, "Other1", tag.Other1) : undefined,
            other2: tag.Other2 ? restructureFile(tag.id, baseURL, "Other2", tag.Other2) : undefined,
            other3: tag.Other3 ? restructureFile(tag.id, baseURL, "Other3", tag.Other3) : undefined,
            other4: tag.Other4 ? restructureFile(tag.id, baseURL, "Other4", tag.Other4) : undefined,
            videos: tag.videos?.video ? restructureVideos(tag.videos.video) : undefined


        })
    }

    return restructuredTags;
}

const restructureFile = (id: number, baseURL: string, name: string, file: any) => {
    return {
        url: `${baseURL}/download/${id}/${name}`,
        type: file["@type"] ?? undefined
    }
}
const restructureVideos = (videos: OldVideo[] | OldVideo) => {
    if (videos) {
        if (!Array.isArray(videos)) {
            videos = [videos];
        }
        const newVideos: Video[] = [];
        for (const video of videos) {
            newVideos.push({
                id: video.id,
                description: video.Desc ?? undefined,
                key: video.SungKey?.split(":")[1] ?? undefined,
                tonality: video.SungKey?.split(":")[0] ?? undefined,
                multitrack: video.Multitrack ? video.Multitrack == "Yes" : undefined,
                code: video.Code ?? undefined,
                facebook: video.Facebook ?? undefined,
                sungBy: video.SungBy ?? undefined,
                sungWebsite: video.SungWebsite ?? undefined,
                posted: video.Posted
            })
        }
    } else return undefined;
}