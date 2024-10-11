type Props = {
  id: string
  src: string
  name: string
}

export const File = ({ id, name, src }: Props) => {
  return (
    <div
      key={id}
      className="mr-2 inline-block"
    >
      <div className="min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={src}
          className="cover img-"
        />
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-sm text-gray-700 text-ellipsis">
            <a
              href={src}
              className="text-ellipsis"
            >
              <span
                aria-hidden="true"
                className=""
              />
              filename: {name}
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}
