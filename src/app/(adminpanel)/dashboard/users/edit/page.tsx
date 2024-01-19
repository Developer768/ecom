import EditUser from "@/components/Users/EditUser";
import { db } from "@/server/db";
import React from "react";

const EditUserPage = async ({ searchParams }:{searchParams:any}) => {

  if (searchParams.user.length != 24) {
    return (
      <div className="">
        <div className="borde rounded-md  p-4">
          <h3 className="text-2xl font-bold">Edit User</h3>
        </div>
        <div className="m-4 rounded-md border bg-white p-4">
          <p className="">Wrong Id.</p>
        </div>
      </div>
    );
  }


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
    {user ? (
      <EditUser data={user} />
    ) : (
      <div className="m-4 rounded-md border bg-white p-4">
        <p className="">No User was found with given ID.</p>
      </div>
    )}
  </div>
  );
};

export default EditUserPage;
