"use client";
import React, { useState } from "react";
import { Icons } from "@/lib/Icons";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteShippingCountybyID = ({ id }: { id: string }) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const state = api.counties.deleteShippingCounty.useMutation();
  const onDelete = async (data: string) => {
    const apiResult = await state.mutateAsync(data);
    if (apiResult) {
      router.refresh();
      setOpen(false);
    }
  };
  return (
    <div className="delete w-fit">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="cursor-pointer">
          <Icons.close className="h-5 w-5 text-destructive" />
        </DialogTrigger>
        <DialogContent className="max-w-[330px]">
          <DialogHeader>
            <DialogTitle>Delete County</DialogTitle>
            <DialogDescription>
              Are you sure you want to Delete this Shipping County?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant={"destructive"} onClick={() => onDelete(id)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteShippingCountybyID;
