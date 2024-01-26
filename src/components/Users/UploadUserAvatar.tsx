"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { env } from "@/env";
import Image from "next/image";
import { api } from "@/trpc/react";
import { apiReplyType } from "@/types";
import { Icons } from "@/lib/Icons";
import { useRouter } from "next/navigation";


type Props = {
  id: string;
  avatar: string;
}

const UploadUserAvatar = (props:Props) => {
  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const [avatarImage,setImageAvatar] = useState<string>("")
  const [isUploaded,setIsUploaded] = useState<boolean>(false)
  const [formError,setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  })

  const user = api.user.uploadImage.useMutation()

  useEffect(()=>{
    setImageAvatar(props.avatar)
  },[])

  
  const onSubmit = async (data) => {
    if(data.profile.length <1){
      setFormError({
        error: "error",
        message: "Please select Image.",
      })
      return true
    }
    setIsUploaded(true)
    const image = data.profile[0];
    const formData = new FormData();
    formData.append("file", image);
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
    // console.log(imageUrl);
    const apiResult = await user.mutateAsync({
      id:props.id,
      avatar: imageUrl
    },{onSuccess: () => {
      router.refresh();
    },});
    setImageAvatar(imageUrl)
    setFormError(apiResult)
    setIsUploaded(false)
  };


  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <Image src={avatarImage||"/assets/images/avatar.png"} alt="Avatar" width={100} height={100} className="rounded-full mb-6" />
      <label
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        Upload file
      </label>
      <Input
        {...register("profile")}
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>

      {
          formError.error === "error" && (
            <div className="bg-destructive/15 text-destructive p-3 rounded-md flex items-center gap-x-2 text-sm my-4">
              <Icons.alertTriangle className="h-4 w-4" />
              <p className="">{formError.message}</p>
            </div>
          )
        }
        {
          formError.error === "success" && (
            <div className="bg-emerald-500/15 text-emerald-500 p-3 rounded-md flex items-center gap-x-2 text-sm my-4">
              <Icons.Check className="h-4 w-4" />
              <p className="">{formError?.message}</p>
            </div>
          )
        }
      <Button type="submit" className="" disabled={isUploaded}>
        Upload Avatar
      </Button>
    </form>
  );
};

export default UploadUserAvatar;
