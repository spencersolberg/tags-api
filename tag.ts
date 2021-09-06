export type Tag = {
    id: number;
    title: string;
    key?: Key;
    tonality?: Tonality
    arranger?: string;
    type?: string;
    parts?: number;
    rating?: number;
    ratingCount?: number;
}

enum Tonality {
    "Major",
    "Minor"
}

enum Key {
    "Cb",
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "E#",
    "Fb",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab",
    "A",
    "A#",
    "Bb",
    "B",
    "B#"
}