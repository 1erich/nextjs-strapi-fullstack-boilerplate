// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const r = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/forgot-password`, {
        email: req.body.email
    })

    console.log(r);

  res.status(200).json({ name: 'John Doe' })
}
