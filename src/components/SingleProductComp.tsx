"use client";
import { Icons } from "@/lib/Icons";
import React, { Suspense, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { cn, findMaxPrice, findMinPrice, splitTags } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { useDispatch } from "react-redux";
import { addProduct } from "@/features/cart/cartSlice";

type Props = {
  data: any;
};
const SingleProductComp = (props: Props) => {
  const { data } = props;
  const [stars, setStars] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState();
  const [variantState, setVariantState] = useState();
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<apiReplyType>({
    error: "",
    message: "",
  });

  useEffect(() => {
    const str = (Math.random() * (5 - 4) + 4).toFixed(1);
    setStars(str);
    const minPrice = findMinPrice(data.combination);
    const maxPrice = findMaxPrice(data.combination);
    const initialPrice = minPrice + " - $" + maxPrice;
    console.log(typeof initialPrice);
    setPrice(initialPrice);
    const resultObject = createEmptyObject(data.variants);
    // setVariantState(resultObject)
    setVariantState({
      ...resultObject,
      price: "",
    });

    const variationCombinations = generateVariationObjects(data.combination);
    setCombs(variationCombinations);
  }, []);
  const [productImage, setProductImage] = useState<string>(data.images[0]);

  // console.log(data.variants)

  function createEmptyObject(arr) {
    return arr.reduce((result, item) => {
      result[item.name] = "";
      return result;
    }, {});
  }

  const updateVariantProperty = (key, value) => {
    setVariantState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  function doesKeyValuePairExist(obj, key, value) {
    for (const objKey in obj) {
      if (
        obj.hasOwnProperty(objKey) &&
        obj[objKey] === value &&
        objKey === key
      ) {
        return true;
      }
    }
    return false;
  }

  const checkVariant = (variantName, value) => {
    updateVariantProperty(variantName, value);
  };

  const [combs, setCombs] = useState();

  function generateVariationObjects(inputArray) {
    const variationObjects = [];

    for (const item of inputArray) {
      const currentObject = {};

      // Extract key-value pairs dynamically
      const pairs = item.name.match(/([^:,]+: [^,]+)/g);
      pairs.forEach((pair) => {
        const [key, value] = pair.split(":").map((part) => part.trim());
        currentObject[key] = value;
      });

      // Add other properties like price
      currentObject.price = item.price;

      variationObjects.push(currentObject);
    }

    return variationObjects;
  }

  // function doesObjectExistInArray(objToFind, array) {
  //   return array.some(item => {
  //     // Compare each property in objToFind with the corresponding property in the array item
  //     return Object.keys(objToFind).every(key => objToFind[key] === item[key]);
  //   });
  // }

  // const exists = doesObjectExistInArray(variantState, combs);
  // function getPriceFromObjectInArray(objToFind, array) {
  //   const foundObject = array.find(item => {
  //     return Object.keys(objToFind).every(key => objToFind[key] === item[key]);
  //   });

  //   return foundObject ? foundObject.price : null;
  // }

  function getPriceFromObjectInArray(objToFind, array) {
    const foundObject = array.find((item) => {
      return Object.keys(objToFind).every((key) => {
        if (key === "price") {
          // Skip comparison for the 'price' property
          return true;
        }
        return objToFind[key] === item[key];
      });
    });

    return foundObject ? foundObject.price : null;
  }

  useEffect(() => {
    console.log("Variant State =====================> ", variantState);
    console.log("Combs =====================> ", combs);
    if (combs && variantState) {
      const updatedPrice = getPriceFromObjectInArray(variantState, combs);
      if (variantState.price != updatedPrice) {
        if (updatedPrice) {
          setPrice(updatedPrice);
          setVariantState({
            ...variantState,
            price: updatedPrice,
          });
        }
      }
      // if(updatedPrice){

      //   console.log("Updated Price =====================> ", updatedPrice);
      // }
    }
    // setPrice(getPriceFromObjectInArray(variantState, combs))
  }, [variantState]);

  const increasePrice = () => {
    const updatedQuantity = parseInt(quantity) + 1;
    setQuantity(updatedQuantity.toString());
  };
  const decreasePrice = () => {
    if (quantity > 1) {
      const updatedQuantity = parseInt(quantity) - 1;
      setQuantity(updatedQuantity.toString());
    }
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    if (variantState?.price != "") {
      setLoading(true);

      if (localStorage.getItem("kratomCart") === null) {
        console.log("CART IS EMPTY");
      } else {
        // console.log(JSON.parse(localStorage.getItem("kratomCart")))
      }
      dispatch(
        addProduct({
          id: data.id,
          image: data.images[0],
          name: data.name,
          slug: data.slug,
          variant: {
            ...variantState,
          },
          quantity,
        }),
      );

      // console.log("Add to cart",{
      //   id:data.id,
      //   image:data.images[0],
      //   "Product Name":data.name,
      //   slug:data.slug,
      //   variant:{
      //     ...variantState,
      //   },
      //   quantity
      // })

      setFormError({
        error: "",
        message: "",
      });
    } else {
      setLoading(false);
      setFormError({
        error: "error",
        message: "Please Select Products Variants.",
      });
    }
    setLoading(false);
  };
  // console.log(combs);
  // console.log(variantState);
  return (
    <div className="width px-4 py-4 3xl:px-0">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Suspense fallback={"Loading..."}>
          <div className="image-slider">
            <div className="img relative mb-4 flex aspect-video w-full items-center justify-center rounded-[21px]  bg-grey p-4">
              <img
                src={productImage}
                alt={data.name}
                className="object-contain "
              />
            </div>
            <div className="images flex flex-wrap items-center  gap-6">
              {data.images.map((img, index) => (
                <div
                  key={index}
                  className={`flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md bg-grey p-1 hover:border hover:border-primary ${
                    productImage === img && "border border-primary"
                  }`}
                  onClick={() => setProductImage(img)}
                >
                  <img
                    src={img}
                    alt={data.name}
                    className="h-[90px] w-[90px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product-details">
            <h3 className="mb-2 font-dmSans text-[22px] font-bold leading-tight text-black lg:text-[30px] xl:mb-3 xl:text-[38px] 3xl:text-[50px]">
              {data.name}
            </h3>
            <div className="flex items-center gap-4">
              <h3
                className={`mb-1 font-dmSans text-[18px] font-medium leading-tight lg:text-[24px] xl:mb-3 xl:text-[30px] 3xl:text-[40px] ${
                  quantity > 1 ? "text-gray-400 line-through" : "text-primary"
                }`}
              >
                ${price}
              </h3>
              {quantity > 1 && variantState.price != "" && (
                <div className="flex items-center gap-3">
                  <p className="">x {quantity}</p>
                  <p className="font-dmSans text-[16px] font-medium leading-tight text-primary lg:text-[24px] xl:mb-3 xl:text-[30px] 3xl:text-[40px] ">
                    ${quantity * parseInt(variantState.price)}
                  </p>
                </div>
              )}
            </div>
            <div className="stars mb-2 flex items-center gap-1 xl:mb-3">
              <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
              <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
              <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
              <Icons.Star className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
              <Icons.StarHalf className="w-[16px] border-golden fill-golden stroke-golden lg:w-[18px] xl:w-[20px] 3xl:w-[22px]" />
              <p className="ml-4 text-[16px]  text-golden lg:text-[18px] xl:text-[20px] 3xl:text-[22px]">
                {stars} Ratings
              </p>
            </div>
            <div className="desc border-y border-y-[#8F8F8F] py-3 xl:py-6">
              <p className=" font-dmSans text-[16px] xl:text-[20px]">
                {data.desc}
              </p>
            </div>
            {/* Variants */}
            {data.variants ? (
              <div className="variants py-3 xl:py-6">
                {data.variants.map((variant) => (
                  <div className={`${variant.name}`} key={variant.name}>
                    <h3 className="font-dmSans text-[16px] font-bold lg:text-[18px] 2xl:text-[25px]">
                      {variant.name}
                    </h3>
                    <div className="my-3 flex flex-wrap items-center gap-4">
                      {splitTags(variant.variations).map(function (variantion) {
                        return (
                          // <div className={`${variantion} cursor-pointer`} key={variantion}>
                          //   {variantion}
                          // </div>
                          <Button
                            variant={"outline"}
                            onClick={() =>
                              checkVariant(variant.name, variantion)
                            }
                            className={`relative w-fit min-w-[150px] rounded-full border-[#707070] font-bold hover:border-primary 2xl:p-6 2xl:text-[20px] ${
                              doesKeyValuePairExist(
                                variantState,
                                variant.name,
                                variantion,
                              ) && "border-primary"
                            }`}
                            key={variantion}
                          >
                            {/* <p className={`w-6 h-6 bg-primary rounded-full absolute  -top-[30%] hidden items-center justify-center ${doesKeyValuePairExist(variantState,variant.name,variantion) && "flex"}`}>
                            <Icons.Check className=" text-white h-4 w-4" />
                          </p> */}
                            {doesKeyValuePairExist(
                              variantState,
                              variant.name,
                              variantion,
                            ) && (
                              <p
                                className={`absolute -top-[30%] flex h-6 w-6  items-center justify-center rounded-full bg-primary`}
                              >
                                <Icons.Check className=" h-4 w-4 text-white" />
                              </p>
                            )}
                            {variantion}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="add-to-cart border-t border-t-[#8F8F8F] py-3 xl:py-6">
              <div className="pb-3 xl:pb-6">
                {formError.error === "error" && (
                  <div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                    <Icons.alertTriangle className="h-4 w-4" />
                    <p className="">{formError.message}</p>
                  </div>
                )}
                {formError.error === "success" && (
                  <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
                    <Icons.Check className="h-4 w-4" />
                    <p className="">{formError?.message}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap justify-between gap-4">
                <div
                  className={
                    "flex w-full items-center justify-between rounded-full border border-[#707070] font-bold sm:w-[35%] 2xl:p-1 2xl:text-[20px] "
                  }
                >
                  <Button
                    variant={"ghost"}
                    className="rounded-full bg-transparent"
                    onClick={() => decreasePrice()}
                  >
                    <Icons.Minus className="" />
                  </Button>
                  {quantity}
                  <Button
                    variant={"ghost"}
                    className="rounded-full bg-transparent"
                    onClick={() => increasePrice()}
                  >
                    <Icons.Plus className="" />
                  </Button>
                </div>
                <Button
                  className="w-full rounded-full font-bold sm:w-[60%] 2xl:p-6 2xl:text-[20px]"
                  disabled={loading}
                  onClick={() => addToCart()}
                >
                  ADD TO CART
                </Button>
              </div>
              <div className="flex items-center justify-end">
                <img src="/assets/images/visa.png" alt="Visa" />
              </div>
            </div>

            <div className="details">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-b-2 border-b-black"
                >
                  <AccordionTrigger className="font-dmSans text-[16px] font-bold no-underline hover:no-underline lg:text-[18px] 2xl:text-[25px]">
                    PRODUCT DETAILS
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="detail font-dmSans text-[16px] xl:text-[18px]"
                      dangerouslySetInnerHTML={{ __html: data.details }}
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default SingleProductComp;
