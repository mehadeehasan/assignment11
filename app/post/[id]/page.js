import blogdata from '../../data/blogData.json';
import { useRouter } from 'next/router';


export default function post({params}) {
    const id = params;
    console.log(id);
    return (
      <div>
        <h1>This is post Pgae.</h1>

                    {blogdata.map(post =>
                    <div
                        key={post.id}
                        style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>)}

     </div>
    )
} 