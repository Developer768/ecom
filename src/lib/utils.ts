import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHex(num: string) {
  return Boolean(num.match(/^0x[0-9a-f]+$/i)) && num.length === 24;
}

export function splitTags(value: string) {
  var str_array = value.split(/\s*,\s*/);

  return str_array;
}

export function parseISOString(s: any) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export function findMinPrice(combinations) {
  // Filter out invalid prices and convert strings to floats
  const validPrices = combinations
    .map(comb => parseFloat(comb.price))
    .filter(price => !isNaN(price));

  // Check if there are valid prices
  if (validPrices.length === 0) {
    return null; // or handle the case when there are no valid prices
  }

  // Find the minimum price
  const minPrice = Math.min(...validPrices);

  return minPrice;
}

export function findMaxPrice(combinations) {
  // Filter out invalid prices and convert strings to floats
  const validPrices = combinations
    .map(comb => parseFloat(comb.price))
    .filter(price => !isNaN(price));

  // Check if there are valid prices
  if (validPrices.length === 0) {
    return null; // or handle the case when there are no valid prices
  }

  // Find the maximum price
  const maxPrice = Math.max(...validPrices);

  return maxPrice;
}

export function getRandomFloat(min:number, max:number, decimals:number) {
  const str = (Math.random() * (max - min) + min).toFixed(
    decimals,
  );

  return parseFloat(str);
}

// export const data = [
//   {
//     id: "65b2b8d48e313ce10307cf63",
//     productImage: [],
//     images: [
//       "https://res.cloudinary.com/ddl1d3rgb/image/upload/v1706211355/kratom/syeervn3n3sxkdjqn8lt.jpg",
//     ],
//     name: "KRATOM BEGINNER’S PACK",
//     slug: "kratom-beginners-pack",
//     desc: "Usually ships within 24-48 hours",
//     details:
//       "<p>Are you lost on where to start and not sure which strain to choose? We got you covered.</p><p>We have your Beginner’s Pack that contains 25g or 25 capsules (800mg) each of our most popular strains (total of 125g):</p><ul><li>Maeng Da Borneo</li><li>Red Vein Bali</li><li>Red Horn</li><li>White Vein Borneo</li><li>Green Malay</li></ul>",
//     discount: "0",
//     metaTitle: "KRATOM BEGINNER’S PACK",
//     metaDescription: "KRATOM BEGINNER’S PACK Usually ships within 24-48 hours",
//     variants: [{ name: "Form", variations: "Capsules,Powder" }],
//     combination: [
//       { name: "Form: Capsules", price: "100" },
//       { name: "Form: Powder", price: "90" },
//     ],
//     createdAt: "2024-01-25T19:39:00.897Z",
//     updatedAt: "2024-01-25T23:53:27.720Z",
//     categoryId: "65b2b5f78e313ce10307cf5d",
//     tags: ["Capsules", "Powder"],
//     category: {
//       id: "65b2b5f78e313ce10307cf5d",
//       category_name: "Kratom Capsule",
//       slug: "kratom-capsule",
//       description: "Category containg all the Kratom Capsule products.",
//       metaTitle: "Kratom Capsule",
//       metaDescription: "Category containg all the Kratom Capsule products.",
//     },
//   },
//   {
//     id: "65b2b9d58e313ce10307cf65",
//     productImage: [],
//     images: [
//       "https://res.cloudinary.com/ddl1d3rgb/image/upload/v1706211720/kratom/klibxlxdcjrzal5addok.png",
//     ],
//     name: "RED MAENG DA KRATOM",
//     slug: "red-maeng-da-kratom",
//     desc: "Usually ships within 24-48 hours",
//     details:
//       "<h2>Description</h2><p>The Red Vein Maeng Da is known to be the most potent strain of Kratom that is readily available today. It contains the most number of active alkaloids among other strains. This particular strain is famously distinctive for its smell, along with its red vein flourishing around its dark leaves, thereby getting its’ name the “Red Vein.”</p><p>Among our other available Kratom strains, we are proud to say that our Red Vein Maeng Da is sophisticatedly harvested from our trusted local sources in Southeast Asia. It then followed a systematic and hands-on process of removing the stem and veins and powdered into the purest form</p>",
//     discount: "10",
//     metaTitle: "RED MAENG DA KRATOM",
//     metaDescription: "RED MAENG DA KRATOM Usually ships within 24-48 hours",
//     variants: [
//       { name: "Form", variations: "25 Capsules,50 Capsules,100 Capsule" },
//     ],
//     combination: [
//       { name: "Form: 25 Capsules", price: "50" },
//       { name: "Form: 50 Capsules", price: "100" },
//       { name: "Form: 100 Capsule", price: "250" },
//     ],
//     createdAt: "2024-01-25T19:43:17.534Z",
//     updatedAt: "2024-01-25T19:43:32.363Z",
//     categoryId: "65b2b5f78e313ce10307cf5d",
//     tags: ["Capsules", "Powder"],
//     category: {
//       id: "65b2b5f78e313ce10307cf5d",
//       category_name: "Kratom Capsule",
//       slug: "kratom-capsule",
//       description: "Category containg all the Kratom Capsule products.",
//       metaTitle: "Kratom Capsule",
//       metaDescription: "Category containg all the Kratom Capsule products.",
//     },
//   },
//   {
//     id: "65b935759ced2f02de62ef64",
//     productImage: [],
//     images: [
//       "https://res.cloudinary.com/ddl1d3rgb/image/upload/v1706636505/kratom/yfvfobz8vjczgdvoqjsa.png",
//     ],
//     name: "The Kratom Company",
//     slug: "the-kratom-company",
//     desc: "Usually ships within 24-48 hours",
//     details:
//       "<p>Are you lost on where to start and not sure which strain to choose? We got you covered.</p><p>We have your Beginner’s Pack that contains 25g or 25 capsules (800mg) each of our most popular strains (total of 125g):</p><ul><li>Maeng Da Borneo</li><li>Red Vein Bali</li><li>Red Horn</li><li>White Vein Borneo</li><li>Green Malay</li></ul><p><br></p>",
//     discount: "0",
//     metaTitle: "The Kratom Company",
//     metaDescription: "The Kratom Company Usually ships within 24-48 hours",
//     variants: [{ name: "Capsules", variations: "100,200,500" }],
//     combination: [
//       { name: "Capsules: 100", price: "30" },
//       { name: "Capsules: 200", price: "50" },
//       { name: "Capsules: 500", price: "89.99" },
//     ],
//     createdAt: "2024-01-30T17:44:21.095Z",
//     updatedAt: "2024-01-30T17:44:21.095Z",
//     categoryId: "65b2b5f78e313ce10307cf5d",
//     tags: ["Kratom", "Capsules", "Kratom Capsules"],
//     category: {
//       id: "65b2b5f78e313ce10307cf5d",
//       category_name: "Kratom Capsule",
//       slug: "kratom-capsule",
//       description: "Category containg all the Kratom Capsule products.",
//       metaTitle: "Kratom Capsule",
//       metaDescription: "Category containg all the Kratom Capsule products.",
//     },
//   },
//   {
//     id: "65b935f39ced2f02de62ef65",
//     productImage: [],
//     images: [
//       "https://res.cloudinary.com/ddl1d3rgb/image/upload/v1706636679/kratom/lo4jrbo9hzmzzws3eauf.png",
//     ],
//     name: "Hush Kratom K Tropix",
//     slug: "hush-kratom-k-tropix",
//     desc: "Usually ships within 24-48 hours",
//     details:
//       "<p>Are you lost on where to start and not sure which strain to choose? We got you covered.</p><p>We have your Beginner’s Pack that contains 25g or 25 capsules (800mg) each of our most popular strains (total of 125g):</p><ul><li>Maeng Da Borneo</li><li>Red Vein Bali</li><li>Red Horn</li><li>White Vein Borneo</li><li>Green Malay</li></ul><p><br></p>",
//     discount: "5",
//     metaTitle: "Hush Kratom K Tropix",
//     metaDescription: "Hush Kratom K Tropix Usually ships within 24-48 hours",
//     variants: [
//       { name: "Capsules", variations: "2,5,10" },
//       { name: "Packs", variations: "S,M" },
//     ],
//     combination: [
//       { name: "Capsules: 2, Packs: S", price: "10" },
//       { name: "Capsules: 2, Packs: M", price: "20" },
//       { name: "Capsules: 5, Packs: S", price: "30" },
//       { name: "Capsules: 5, Packs: M", price: "40" },
//       { name: "Capsules: 10, Packs: S", price: "50" },
//       { name: "Capsules: 10, Packs: M", price: "60" },
//       { name: "Capsules: 10, Packs: S", price: "0" },
//       { name: "Capsules: 10, Packs: M", price: "0" },
//       { name: "Capsules: 10, Packs: L", price: "0" },
//     ],
//     createdAt: "2024-01-30T17:46:27.103Z",
//     updatedAt: "2024-01-30T17:46:27.103Z",
//     categoryId: "65b2b5f78e313ce10307cf5d",
//     tags: ["Kratom", "Capsules", "Kratom Capsules"],
//     category: {
//       id: "65b2b5f78e313ce10307cf5d",
//       category_name: "Kratom Capsule",
//       slug: "kratom-capsule",
//       description: "Category containg all the Kratom Capsule products.",
//       metaTitle: "Kratom Capsule",
//       metaDescription: "Category containg all the Kratom Capsule products.",
//     },
//   },
// ];
