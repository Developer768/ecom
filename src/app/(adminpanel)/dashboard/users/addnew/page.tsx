import AddNewUser from "@/components/Users/AddNewUser";
import React from "react";

const AddNewUserPage = () => {
  return (
    <div className="">
      <div className="rounded-md borde  p-4">
        <h3 className="text-2xl font-bold">Add New User</h3>
      </div>
      <AddNewUser />
    </div>
  );
};

export default AddNewUserPage;
