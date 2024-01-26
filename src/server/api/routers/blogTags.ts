import { TagsSchema, tagApiSchema } from "@/schemas/tagsSchema";
import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "@/server/api/trpc";
  import { db } from "@/server/db";
  import { z } from "zod";


export const tagRouter = createTRPCRouter({
    addNewTag: protectedProcedure
    .input(TagsSchema)
    .mutation(async ({ input }) => {
      try {
        const {name,description } = input;
        // console.log(input);

        const tagAlreadyExists = await db.blogTags.findFirst({
          where: {
                name: name,
          },
        });


        if (tagAlreadyExists) {
          console.log("error");
          return {
            error: "error",
            message: "Tag already Exists.",
          };
        }

        await db.blogTags.create({
          data: {
            name: name,
            desc: description,
          },
        });
        return {
          error: "success",
          message: "Tag created Successfully.",
        };
      } catch (err) {
        console.log(err);
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
    deleteTag: protectedProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        const tagAlreadyExists = await db.blogTags.findUnique({
          where: {
            id: input,
          },
        });
        // console.log(tagAlreadyExists);
        if (!tagAlreadyExists) {
          return {
            error: "error",
            message: "Tag Doesn't exists.",
          };
        } else {
          await db.blogTags.delete({
            where: {
              id: input,
            },
          });
          return {
            error: "success",
            message: "Tag Deleted Sucessfuly.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
  editTag: protectedProcedure
    .input(tagApiSchema)
    .mutation(async ({ input }) => {
      try {
        const { id,name,description } = input;

        const blogTagAlreadyExists =
          await db.blogTags.findUnique({
            where: {
              id: id,
            },
          });
        if (!blogTagAlreadyExists) {
          return {
            error: "error",
            message: "Tag Doesn't exists.",
          };
        } else {
          await db.blogTags.update({
            where: {
              id: id,
            },
            data: {
              name:name,
              desc:description
            },
          });
          return {
            error: "success",
            message: "Tag updated Sucessfully.",
          };
        }
      } catch {
        return {
          error: "error",
          message: "Something went wrong. Please try again later.",
        };
      }
    }),
})