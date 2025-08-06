import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'secure', 'my-book.html')

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; filename="my-book.html"')

  const fileStream = fs.createReadStream(filePath)
  fileStream.pipe(res)
}