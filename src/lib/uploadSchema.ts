import { z } from "zod"

export const songSchema = z.object({
  title: z.string().min(1, "Title is required"),
  artist: z.string().min(1, "Artist is required"),
  producer: z.string().optional(),
  duration: z.string().optional(),
  vocalType: z.string().optional(),
  tempo: z.string().optional(),
  language: z.string().optional(),
  album: z.string().optional(),
  genre: z.string().optional(),
  mood: z.string().optional(),
  releaseDate: z.string().optional(),
  description: z.string().optional(),
})

export type SongFormValues = z.infer<typeof songSchema>
