import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between h-full max-w-max px-12 py-8 bg-stone-900'>
      <div>
        <h1 className='font-bold mb-12'>PORTFOLIO</h1>
        <ul className='flex flex-col gap-4'>
          <li>
            <Link href='/'>Dashboard</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link href='/works'>Works</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className='cursor-pointer'>Shrink</p>
      </div>
    </div>
  );
};

export default Sidebar;
