/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */

const filterDataToSingleItem = (data, preview) => {
  if (!Array.isArray(data)) return data

  return data.length > 1 && preview
    ? data.filter((item) => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0]
}

export default filterDataToSingleItem
