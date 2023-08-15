"use client"
import Link from 'next/link';
import blogdata from '../data/blogData.json';

export default function blog() {
    return (
      <div>
        <h1>This is Blog Pgae.</h1>

                    {blogdata.map(post =>
                    <div
                        key={post.id}
                        style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                        <h2>{post.title}</h2>
                        {/* <h2><Link href={`/post/${post.id}`}>{post.title}</Link></h2> */}
                        <p>{post.content}</p>
                    </div>)}

     </div>
    )
} 