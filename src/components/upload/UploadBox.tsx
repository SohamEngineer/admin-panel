"use client"

import * as React from "react"
import { Upload, File as FileIcon } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { Label } from "../../components/ui/label"

export interface UploadBoxProps {
  label?: string
  description?: string
  containerClassName?: string
  className?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  onFileSelect?: (file: File | null) => void
}

export const UploadBox = React.forwardRef<
  HTMLInputElement,
  UploadBoxProps
>(
  (
    {
      label,
      description,
      className,
      containerClassName,
      accept,
      multiple = false,
      disabled = false,
      onFileSelect,
    },
    ref
  ) => {
    const [fileName, setFileName] = React.useState<string | null>(null)
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    function handleFiles(files: FileList | null) {
      if (!files || files.length === 0) {
        setFileName(null)
        onFileSelect?.(null)
        return
      }

      const file = files[0]
      setFileName(file.name)
      onFileSelect?.(file)
    }

    return (
      <div className={cn("space-y-2", containerClassName)}>
        {label && (
          <Label className="text-sm font-medium">
            {label}
          </Label>
        )}

        <div
          className={cn(
            "group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/20 p-8 text-center transition hover:border-primary",
            disabled &&
              "cursor-not-allowed opacity-50 hover:border-muted-foreground/25",
            className
          )}
          onClick={() =>
            !disabled && inputRef.current?.click()
          }
          onDragOver={(e) => {
            if (disabled) return
            e.preventDefault()
            e.stopPropagation()
          }}
          onDrop={(e) => {
            if (disabled) return
            e.preventDefault()
            e.stopPropagation()
            handleFiles(e.dataTransfer.files)
          }}
        >
          <input
            ref={(node) => {
              inputRef.current = node
              if (typeof ref === "function") ref(node)
              else if (ref) ref.current = node
            }}
            type="file"
            className="hidden"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(e) =>
              handleFiles(e.target.files)
            }
          />

          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            {fileName ? (
              <>
                <FileIcon className="h-6 w-6 text-primary" />
                <p className="text-sm font-medium text-foreground">
                  {fileName}
                </p>
              </>
            ) : (
              <>
                <Upload className="h-6 w-6" />
                <p className="text-sm">
                  Drag & drop or{" "}
                  <span className="font-medium text-primary">
                    browse
                  </span>
                </p>
              </>
            )}

            {description && (
              <p className="text-xs text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
)

UploadBox.displayName = "UploadBox"
