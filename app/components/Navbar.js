import Link from 'next/link';

function Navbar() {
  return (
    <div>
        <nav className='flex justify-between bg-slate-500 px-8 py-3'>
            <Link className='text-white font-bold' href={"/"}>Building a Simple Blog</Link>
            <Link className='p-2' href={"/home"}>Home</Link>
            <Link className='p-2' href={"/blog"}>Blog</Link>
        </nav>
    </div>
    
  )
}

export default Navbar