import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  console.log("Entering Token Request")
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    console.log("Attempting revalidation")
    // Regenerate our index route showing the images
    await res.revalidate("/gallery")
    return res.json({ revalidated: true })
  } catch (err) {

    console.log("Error Revalidating")
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating")
  }
}
