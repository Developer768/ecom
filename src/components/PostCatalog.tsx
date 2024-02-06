import Link from 'next/link';
import React from 'react'
import LinkButton from './customUI/LinkButton';
type Props = {
    data: any;
  };

const PostCatalog = (props:Props) => {
    const { data } = props;
  return (
    <div className="post-catalog bg-grey group mx-auto  flex w-full max-w-[430px] flex-col justify-between rounded-[21px] border-2 border-transparent p-5 text-black hover:border-primary lg:min-h-[420px] xl:min-h-[520px]">
      <div className="img mx-auto flex   items-center justify-center rounded-[21px]">
        <img src={data.image} alt={data.name} className="object-cover rounded-[21px]" />
      </div>
      <div className="mt-[30px] xl:mt-auto">
        <div className="fle justify-between">
          <div className="details w-[80%">
            <Link href={`/blog/${data.category.slug}/${data.slug}`}>
              <h3 className="font-dmSans text-[18px] font-bold text-black xl:text-[24px]">
                {data.title}
              </h3>
            </Link>
            <Link href={`/blog/${data.category.slug}`}>

            <p className="text-textGrey font-dmSans text-[16px] font-bold">
              {data.category.category_name}
            </p>
            </Link>
            <p className="text-textGrey font-dmSans text-[16px] ">
              {data.summary}
            </p>
          </div>
          
        </div>
        <LinkButton
          href={`/blog/${data.category.slug}/${data.slug}`}
          className="mt-3 hidden w-full rounded-full group-hover:flex xl:p-6 xl:text-[18px] xl:font-bold"
        >
          See Post
        </LinkButton>
      </div>
    </div>
  )
}

export default PostCatalog