"use client";
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import LoadingProducts from './LoadingProducts';
import PostsReels from './PostsReels';
import { api } from '@/trpc/react';

type Props = {
    slug: string;
  };

const AllPosts = (props: Props) => {
    const [page, setPage] = useState<string>("0");
  const [posts, setPosts] = useState<any>();
  const [loadMoreButton, setLoadMoreButton] = useState<boolean>(true);

  const post = api.post.getPosts.useMutation();
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await post.mutateAsync({
        page: page,
        slug: props.slug,
      });
      setPosts(response);
    }
    fetchMyAPI();
  }, []);

  async function changePage() {
    const pageNumber = (parseInt(page) + 12).toString();
    const response = await post.mutateAsync({
      page: pageNumber,
      slug: props.slug,
    });
    setPosts([...posts, ...response]);
    console.log(response);
    if (response === undefined || response.length == 0) {
      setLoadMoreButton(true);
    }
    setPage(pageNumber);
  }
  return (
    <div>
      {posts ? (
        <>
          <PostsReels data={posts} />
          {((posts.length % 12 === 0) && loadMoreButton) && (
            <div className="flex items-center justify-center">
              <Button
                variant={"outline"}
                onClick={changePage}
                className="my-8 rounded-full border  border-[#707070] bg-transparent text-black hover:bg-primary hover:text-white 2xl:px-10 2xl:py-6 2xl:text-[22px]"
              >
                Load More
              </Button>
            </div>
          )}
          
        </>
      ) : (
        <LoadingProducts />
      )}
    </div>
  )
}

export default AllPosts