import { cartTable, db } from "@/lib/drizzle"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { v4 as uuid} from "uuid"


export const GET = async (request: NextRequest )=>{
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({res})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"})
        
    }
}


export const POST = async (request: NextRequest )=>{
    const req = await request.json()

    const uid = uuid(); 
    const setCookies = cookies()
    
    
    const userId = cookies().get("user_id")
    
    if(!userId){
        setCookies.set("user_id", uid)
  }

    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: cookies().get("user_id")?.value as string
        }).returning()
        return NextResponse.json({res})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong"})
        
    }
}