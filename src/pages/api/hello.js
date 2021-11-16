// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  } else {
    res.status(401).json({ return: 'Unauthorized' })
  }
}
/*
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
*/
