import { db } from "@/server/db";
import React from "react";

const DashboardPage = async () => {
  const postsCount = await db.blogPosts.count();
  const usersCount = await db.user.count();
  const productsCount = await db.products.count();
  const productCategoryCount = await db.productCategory.count();
  const blogCategoryCount = await db.blogCategory.count();
  const statesCount = await db.states.count();
  const countiesCount = await db.counties.count();

  return (
    <div className="w-full">
      <div className="header mb-4 flex items-center justify-between rounded-md p-4">
        <h3 className="text-2xl font-bold">Dashboard</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Posts</div>
          <div className="text-2xl font-bold text-primary">{postsCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Orders</div>
          <div className="text-2xl font-bold text-primary">NaN</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Users</div>
          <div className="text-2xl font-bold text-primary">{usersCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Products</div>
          <div className="text-2xl font-bold text-primary">{productsCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Product Category</div>
          <div className="text-2xl font-bold text-primary">{productCategoryCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Blog Category</div>
          <div className="text-2xl font-bold text-primary">{blogCategoryCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Shipping States</div>
          <div className="text-2xl font-bold text-primary">{statesCount}</div>
        </div>
        <div className="m-4 rounded-md border  bg-white p-4">
          <div className="text-2xl font-bold">Shipping Counties</div>
          <div className="text-2xl font-bold text-primary">{countiesCount}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
