"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Textarea } from "../../components/ui/textarea"
import { Button } from "../../components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../../components/ui/form"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { UploadBox } from "../../components/upload/UploadBox"
import { ShadcnFormFields } from "../../components/upload/ShadcnFormFields"

import {
  SONG_FIELDS,
  ALBUM_FIELDS,
  UploadMode,
} from "@/config/uploadFields"

import {
  songSchema,
  SongFormValues,
} from "@/src/lib/uploadSchema"

export default function SongUploadForm() {
  const [mode, setMode] = useState<UploadMode>("song")
  const [artwork, setArtwork] = useState<File | null>(null)
  const [audio, setAudio] = useState<File | null>(null)

  const form = useForm<SongFormValues>({
    resolver: zodResolver(songSchema),
    defaultValues: {
      title: "",
      artist: "",
      producer: "",
      duration: "",
      vocalType: "",
      tempo: "",
      language: "",
      album: "",
      genre: "",
      mood: "",
      releaseDate: "",
      description: "",
    },
  })

  const fields = mode === "song" ? SONG_FIELDS : ALBUM_FIELDS

  function onSubmit(values: SongFormValues) {
    const payload = {
      mode,
      values,
      artwork,
      audio,
    }

    console.log("Submitting:", payload)
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container-page mx-auto bg-card rounded-lg shadow-sm p-6">
        <Tabs
          value={mode}
          onValueChange={(v) => setMode(v as UploadMode)}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="song">
              Songs Upload
            </TabsTrigger>
            <TabsTrigger value="album">
              Album Upload
            </TabsTrigger>
          </TabsList>

          <TabsContent value={mode}>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Upload {mode === "song" ? "Song" : "Album"}
            </h2>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Dynamic Fields */}
                <ShadcnFormFields
                  fields={fields}
                  control={form.control}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Description (one line)"
                          className="min-h-[100px] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Artwork Upload */}
                <UploadBox
                  label="Upload Artwork"
                  description="Supported formats: JPEG, PNG"
                  accept="image/*"
                  onFileSelect={setArtwork}
                />



                {/* Song Upload */}
                {mode === "song" && (
                  <UploadBox
                    label="Upload Song"
                    description="Supported format: MP3"
                    accept="audio/mpeg"
                    onFileSelect={setAudio}
                  />
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-base font-medium"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
