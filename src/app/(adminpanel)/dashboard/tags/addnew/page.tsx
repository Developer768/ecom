import AddNewTag from "@/components/Tags/AddNewTag";
import React from "react";

const AddNewUserPage = () => {
  return (
    <div className="">
      <div className="rounded-md borde  p-4">
        <h3 className="text-2xl font-bold">Add New Tag</h3>
      </div>
      <AddNewTag />
    </div>
  );
};

export default AddNewUserPage;
