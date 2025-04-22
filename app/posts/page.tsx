import React from 'react'
import { getServerSession } from 'next-auth'
import CreatePost from '@/app/components/CreatePost'

export default async function page() {

    const session = await getServerSession()

    if (!session) {
        return <p>Please sign in.</p>;
      }
    
      return (
        <div>
          <h1>My Posts</h1>
          <CreatePost />
        </div>
      );
}
