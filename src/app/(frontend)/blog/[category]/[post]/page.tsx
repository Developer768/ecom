import { db } from "@/server/db";
import Link from "next/link";
import React from "react";

const PostPage = async ({
  params,
}: {
  params: { category: string; post: string };
}) => {
  const { category, post } = params;
  const singlePost = await db.blogPosts.findFirst({
    where: {
      slug: post,
    },
    include: {
      category: true,
    },
  });
  return (
    <div className="width">
      {/* Breadcrum */}
      <div className="width px-4 py-4 3xl:px-0">
        <div className="my-4 flex w-fit flex-wrap items-center gap-3 rounded-lg bg-grey px-4 py-2 xl:my-6">
          <Link href={"/"}>
            <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
              Home
            </p>
          </Link>
          {" > "}
          <Link href={`/blog/${category}`}>
            <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
              {singlePost?.category.category_name}
            </p>
          </Link>
          {" > "}
          <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
            {singlePost?.title}
          </p>
        </div>
      </div>

      <article className="post px-4 py-4 3xl:px-0">
        <div className="img mb-4 flex  w-full  rounded-[21px]">
          <img
            src={singlePost.image}
            alt={singlePost.title}
            className="object-contain "
          />
        </div>
        <div className="content">
          <h3 className="mb-2 font-dmSans text-[22px] font-bold leading-tight text-black lg:text-[30px] xl:mb-3 xl:text-[38px] 3xl:text-[50px]">
            {singlePost.title}
          </h3>
          <Link href={`/blog/${singlePost.category.slug}`} >
            <p className="font-dmSans text-[16px] font-bold text-textGrey">
              Category : {singlePost.category.category_name}
            </p>
          </Link>
        </div>
        <div className="tags flex items-center flex-wrap gap-4 my-4">
            {
                singlePost?.tags.map((tag)=>(
                    <div className="bg-grey rounded-full py-2 px-4" key={tag}>
                        <p className="font-dmSans text-[16px] font-bold text-textGrey">
              {tag}
            </p>
                    </div>
                ))
            }
        </div>
        <div className="desc my-4" dangerouslySetInnerHTML={{ __html: singlePost?.content }}></div>
      </article>
    </div>
  );
};

export default PostPage;
