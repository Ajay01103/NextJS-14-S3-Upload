import React from "react"
import { useDropzone } from "react-dropzone"
import { cn } from "@/lib/utils"

type Props = {
  title?: string
  onDrop: (files: File[]) => void
  mimeTypes?: string[]
  isLoading?: boolean
  className?: string
}
export const FileDrop = ({
  title = "Click or drag and drop files",
  onDrop,
  isLoading,
  mimeTypes = [],
  className,
}: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <button
      {...getRootProps()}
      type="button"
      className={cn(
        className,
        {
          "opacity-100 bg-blue-200 border-dashed": isDragActive,
          loading: isLoading,
        },
        "relative block border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      )}
    >
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
        />
      </svg>
      <input
        {...getInputProps()}
        accept={mimeTypes.join(",")}
      />
      <span className="mt-2 block text-sm font-medium text-gray-900">
        {isLoading ? "Uploading..." : title}
      </span>
    </button>
  )
}
