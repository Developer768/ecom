"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { apiReplyType } from "@/types";
import { Icons } from "@/lib/Icons";
import { useRouter } from "next/navigation";

type Props = {
  updateImage: any;
  images: any
};

const UploadProductImages = (props: Props) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  const onSubmit = async (data) => {
    if (data.profile.length < 1) {
      setFormError({
        error: "error",
        message: "Please select Image.",
      });
      return true;
    }
    setIsUploaded(true);
    // for (let index = 0; index < data.profile.length; index++) {
        
        
    // }
    // const image = data.profile[0];
    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("upload_preset", "kratom");
    // const uploadResponse = await fetch(
    //   `https://api.cloudinary.com/v1_1/ddl1d3rgb/image/upload`,
    //   {
    //     method: "POST",
    //     body: formData,
    //   },
    // );
    // const uploadedImageData = await uploadResponse.json();
    // const imageUrl = uploadedImageData.secure_url;
    //   const apiResult = await user.mutateAsync({
    //     id:props.id,
    //     avatar: imageUrl
    //   },{onSuccess: () => {
    //     router.refresh();
    //   },});
    try {
        let array = props.images
        setIsUploaded(true);
    for (let index = 0; index < data.profile.length; index++) {
    const formData = new FormData();
    formData.append("file", data.profile[index]);
    formData.append("upload_preset", "kratom");
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/ddl1d3rgb/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    const uploadedImageData = await uploadResponse.json();
    const imageUrl = uploadedImageData.secure_url;
    array = [...array,imageUrl]
        
    }
      props.updateImage(array);
      setFormError({
        error: "success",
        message: "Image Uploaded Successfully.",
      });
    } catch (errr) {
      setFormError({
        error: "error",
        message: "Something went wrong. Please try again later.",
      });
    }
    setIsUploaded(false);
  };
  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload Image
      </label>
      <Input
        {...register("profile")}
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        multiple
      />

      {formError.error === "error" && (
        <div className="my-4 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          <Icons.alertTriangle className="h-4 w-4" />
          <p className="">{formError.message}</p>
        </div>
      )}
      {formError.error === "success" && (
        <div className="my-4 flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
          <Icons.Check className="h-4 w-4" />
          <p className="">{formError?.message}</p>
        </div>
      )}
      <Button type="submit" className="my-4" disabled={isUploaded}>
        Upload Image
      </Button>
    </form>
  );
};

export default UploadProductImages;
