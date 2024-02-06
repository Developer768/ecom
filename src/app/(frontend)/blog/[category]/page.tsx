import AllPosts from '@/components/AllPosts';
import LinkButton from '@/components/customUI/LinkButton';
import { db } from '@/server/db';
import React from 'react'

const BlogCategoryPage = async({ params }: { params: { category: string } }) => {
    const productsCategories =
    await db.blogCategory.findMany({
      select: {
        id: true,
        category_name: true,
        slug: true,
        description: true,
        metaTitle: true,
        metaDescription: true,
      },
    });
  return (
    <div>
      <div className="width px-4 py-4 3xl:px-0">
        <div className="">
          <h3 className="salome-large py-4 text-green lg:py-8 3xl:py-12">
           Posts
          </h3>
          <div className="categories grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {productsCategories.map((cat) => (
              <LinkButton
                href={`/blog/${cat.slug}`}
                className="rounded-full border border-[#707070]  bg-transparent text-black hover:text-white 2xl:px-10 2xl:py-6 2xl:text-[22px]"
              >
                {cat.category_name}
              </LinkButton>
            ))}

            <LinkButton
              href="/blog"
              className="rounded-full 2xl:px-10 2xl:py-6  2xl:text-[22px]"
            >
              All Posts
            </LinkButton>
          </div>
          <div className="my-4 flex w-fit items-center rounded-lg bg-grey px-4 py-2 xl:my-6">
            <p className="font-dmSans text-[16px] text-black xl:text-[20px]">
              Home {" > "} All Posts
            </p>
          </div>
        </div>
        <div className="posts width">
          <AllPosts slug={params.category} />
        </div>
      </div>
    </div>
  )
}

export default BlogCategoryPage