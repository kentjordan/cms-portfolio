"use client";
import { usePathname } from "next/navigation";

const BlogsPage = () => {
  const path = usePathname();

  return (
    <div className='flex flex-col w-full h-full p-8'>
      <h1 className='text-lg font-bold py-4 w-full text-stone-300'>
        {path.split("/").at(1)?.toUpperCase()}
      </h1>
    </div>
  );
};

export default BlogsPage;
