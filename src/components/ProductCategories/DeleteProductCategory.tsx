"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Icons } from '@/lib/Icons';
import { Button } from '../ui/button';
import { api } from '@/trpc/react';
import { useRouter } from "next/navigation";

const DeleteProductCategorybyID = ({id}:{id:string}) => {
    const router = useRouter()
    const [open, setOpen] =useState<boolean>(false)
    const category = api.category.deleteCategory.useMutation()
    const onDelete = async (data:string) => {
        const apiResult = await category.mutateAsync(data)
        if(apiResult){
            router.refresh()
            setOpen(false)
        }
    }
  return (
    <div className="delete w-fit">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild className="cursor-pointer">
                <Icons.close className="h-5 w-5 text-destructive" />
              </DialogTrigger>
              <DialogContent className="max-w-[330px]">
                <DialogHeader>
                  <DialogTitle>Delete Category</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to Delete this Product Category?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant={"destructive"}
                    onClick={()=> onDelete(id)}
                  >
                    Delete
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
  )
}

export default DeleteProductCategorybyID