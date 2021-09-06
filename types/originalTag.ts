export type OriginalTag = {
    "@index": number,
    id: number,
    Title: string,
    AltTitle?: string | null,
    Version?: string | null,
    WritKey?: string | null,
    Parts?: number | null,
    Type?: "Barbershop" |  "Sweet Adelines" | "SATB" | "Other male" | "Other female" | "Other mixed" | null,
    Recording?: string | null,
    TeachVid?: string | null,
    Lyrics?: string | null,
    Notes?: string | null,
    Arranger?: string | null,
    ArrWebsite?: string | null,
    Arranged?: number | null,
    SungBy?: string | null,
    SungWebsite?: string | null,
    SungYear?: number | null,
    Quartet?: string | null,
    QWebsite?: string | null,
    Teacher?: string | null,
    TWebsite?: string | null,
    Provider?: string | null,
    ProvWebsite?: string | null,
    Posted: string,
    Classic?: number | null,
    Collection?: "classic" | "easytags" | "100" | null,
    Rating?: number | null,
    RatingCount?: number | null,
    Downloaded: number,
    stamp: string,
    SheetMusicAlt?: string | null,
    SheetMusic?: File | null,
    Notation?: File | null,
    AllParts?: File | null,
    Bass?: File | null,
    Bari?: File | null,
    Lead?: File | null,
    Tenor?: File | null,
    Other1?: File | null,
    Other2?: File | null,
    Other3?: File | null,
    Other4?: File | null,
    videos?: Videos | null
}

type File = {
    $: string,
    "@type"?: string | null
}

type Videos = {
    $?: null,
    "@available": number,
    "@count": number,
    video?: OldVideo[] | null
}

export type OldVideo = {
    "@index": number,
    id: number,
    Desc?: string | null,
    SungKey?: string | null,
    Multitrack?: "Yes" | "No" | null,
    Code?: string | null,
    Facebook?: string | null,
    SungBy?: string | null,
    SungWebsite?: string | null,
    Posted: string

}