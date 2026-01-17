export type UploadMode = "song" | "album"

export type FieldConfig = {
  name: string
  placeholder: string
  span?: number
  type?: "text" | "date"
}

export const SONG_FIELDS: FieldConfig[] = [
  { name: "title", placeholder: "Song title.." },
  { name: "artist", placeholder: "Artist name.." },
  { name: "producer", placeholder: "Producer name.." },
  { name: "duration", placeholder: "Song time.." },
  { name: "vocalType", placeholder: "Vocal type.." },
  { name: "tempo", placeholder: "Song tempo.." },
  { name: "language", placeholder: "Language.." },
  { name: "album", placeholder: "Album name.." },
  { name: "genre", placeholder: "Genre.." },
  { name: "mood", placeholder: "Mood.." },
  {
    name: "releaseDate",
    placeholder: "Song release date..",
    span: 2,
    type: "date",
  },
]

export const ALBUM_FIELDS: FieldConfig[] = [
  { name: "title", placeholder: "Album title.." },
  { name: "artist", placeholder: "Main artist.." },
  { name: "label", placeholder: "Record label.." },
  { name: "genre", placeholder: "Genre.." },
  {
    name: "releaseDate",
    placeholder: "Album release date..",
    span: 2,
    type: "date",
  },
]
