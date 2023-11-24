export default function exit(req, res) {
  res.clearPreviewData()
  return res.status(200).json({ preview: false })
}
