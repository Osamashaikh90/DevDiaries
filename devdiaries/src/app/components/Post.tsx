import React from 'react'
import { getSortedPostsData } from "../../../lib/post"
import ListItem from "./ListItem"


export default function Post() {

    const posts = getSortedPostsData()

  return (
    <>
    <div className='h-screen'>
    <section className="mt-6 lg:mx-auto md:mx-10 xxsm:mx-8 lg:w-[1000px]">
            <h2 className="text-4xl font-bold text-center " style={{"color":"#b0b6c8"}}>Blogs</h2>
            <ul className='flex flex-wrap gap-5 mt-6 md:flex-row xxsm:flex-col'>
                {posts.map((post) => {
                  return(
                    <>
                    
                    <div className='w-full h-auto p-5 shadow-xl bg-white/70 backdrop-blur-md rounded-3xl blog-card'>
                      <h1 className='inline-block px-2 text-xl font-semibold rounded-lg blog-id'>{post.id}</h1>
                              <ListItem key={post.id} post={post} />
                              hello
                    </div>
                    </>
                  )
})}
            </ul>
    </section>
    </div>
    </>
  )
}