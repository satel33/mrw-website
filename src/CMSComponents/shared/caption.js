const Caption = ({ data }) => {
  if (data?.overlayCaption) {
    return (
      <span
        className={`py-2 px-4 ${
          data?.textAlign ?? 'text-center'
        } block text-xs italic absolute bottom-0 bg-black-100 text-white-100 w-full bg-opacity-80`}
      >
        {data?.captionText}
      </span>
    )
  } else {
    return (
      <span
        className={`mt-4 px-4  block text-gray-500 text-xs italic ${
          data?.textAlign ?? 'text-center'
        }`}
      >
        {data?.captionText}
      </span>
    )
  }
}

export default Caption
