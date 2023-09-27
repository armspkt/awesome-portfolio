import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json({ message: 'Hello from Next.js! Post' })
  } else if (req.method === 'GET') {
    // Handle any other HTTP method
    res.status(405).json({ error: 'Method not allow' })
  } else {
    res.status(500).json({ error: 'failed to load data' })
  }
}
