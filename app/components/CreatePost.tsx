"use client"
import React, { useState } from 'react'

export default function CreatePost() {

    const [title, setTitle]= useState("");
    const [content, setContent]= useState("")

    const createPost = async () => {
        await fetch('/api/posts',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        })
        setTitle("")
        setContent("")
    }

  return (
    <div>
    <h2>Create Post</h2>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    />
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
    />
    <button onClick={createPost}>Create</button>
  </div>
  )
}
