import React from 'react'
import PostCatalog from './PostCatalog';


type Props = {
    data: any;
  };

const PostsReels = (props:Props) => {
    const { data } = props;
  return (
    <div className="products-reel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((prod: any) => (
        <PostCatalog data={prod} key={prod.id} />
      ))}
    </div>
  )
}

export default PostsReels