import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import  { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function POST(request : Request){
    const session = await getServerSession() 
    if(!session || !session.user || !session.user.id){
        return NextResponse.json({error: "unauthorized"}, {status: 401})
    }

    const { title, content } = await request.json();
    const post = await prisma.post.create({
        data: {
            title,
            content,
            published: false,
            authorId: Number(session.user.id)
        }
    })
    return NextResponse.json(post, {status: 200})
}

export async function GET(){
    const session = await getServerSession()
    if(!session){
        return NextResponse.json({error: "unauthorized"}, {status: 401})
    }

    const posts = await prisma.post.findMany({
        where: {
            authorId: Number(session.user.id)
        },
        include: {author: true}
    })
    return NextResponse.json(posts, {status: 200})
}