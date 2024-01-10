import EditUser from "@/components/Users/EditUser";
import { db } from "@/server/db";
import React from "react";

const EditUserPage = async ({ searchParams }:{searchParams:any}) => {
  const user = await db.user.findUnique({
    where: {
      id: searchParams.user,
    },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });
  return (
    <div className="">
      <div className="borde rounded-md  p-4">
        <h3 className="text-2xl font-bold">Edit User</h3>
      </div>
      <EditUser data={user} />
    </div>
  );
};

export default EditUserPage;
