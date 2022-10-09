import { connect } from 'mongoose';
import { Post } from './../../Model/Post';
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongoConnect'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data> ) {

    if(req.method !== "POST")
    {
      const x: any = "Only Post is applicable in this route!"
      return res.status(401).send(x)
    }

    const { title } = req.body

    console.log(title);
    

    try{

      connectToDatabase()
      const data : any = await Post.create({ title :  "John Doe" })
      const y : any = "YUP"
      res.send(y)

    }
    catch(e : any){
      console.log("error", e)
      res.status(500).send(e)
    }

}
