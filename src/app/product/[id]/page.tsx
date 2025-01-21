// import { getProductById } from '@/sanity/lib/sanity'
// import Image from 'next/image'
// import Link from 'next/link'

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await getProductById(params.id)

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to all products</Link>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: 'cover' }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
//           {product.dicountPercentage > 0 && (
//             <p className="text-red-500 mb-4">{product.dicountPercentage}% off</p>
//           )}
//           <p className="text-gray-700 mb-4">{product.description}</p>
//           <div className="mb-4">
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           {product.isNew && (
//             <p className="text-green-500 font-semibold">New Product</p>
//           )}
//         </div>
//       </div>
//       <div>
//         Add to cart hello
//       </div>
//     </div>
//   )
// }

// import { getProductById } from "@/sanity/lib/sanity"
// import Image from "next/image"
// import Link from "next/link"

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await getProductById(params.id)

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
//         &larr; Back to all products
//       </Link>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//           <div className="flex items-center gap-2 my-2">
//             <span className="text-yellow-500 text-lg">★★★★★</span>
//             <span className="text-gray-500 text-sm">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
//           <p className="text-green-600 font-semibold mb-4">In Stock</p>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
//             <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//             <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
//             <div className="w-6 h-6 bg-black rounded-full"></div>
//           </div>
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Select Options</button>
//           {product.dicountPercentage > 0 && <p className="text-red-500 mt-4">{product.dicountPercentage}% off</p>}
//           <div className="mt-4">
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
//         </div>
//       </div>
//     </div>
//   )
// }

// import { getProductById } from "@/sanity/lib/sanity"
// import Image from "next/image"
// import Link from "next/link"
// import { AddToCartButton } from "@/app/component/AddToCartButton"
// import { addToCart } from "@/app/action"

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await getProductById(params.id)

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
//         &larr; Back to all products
//       </Link>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//           <div className="flex items-center gap-2 my-2">
//             <span className="text-yellow-500 text-lg">★★★★★</span>
//             <span className="text-gray-500 text-sm">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
//           <p className="text-green-600 font-semibold mb-4">In Stock</p>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
//             <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//             <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
//             <div className="w-6 h-6 bg-black rounded-full"></div>
//           </div>
//           <div className="flex gap-4">
//             <AddToCartButton productId={product.id} addToCart={addToCart} />
//             <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300">Select Options</button>
//           </div>
//           {product.dicountPercentage > 0 && <p className="text-red-500 mt-4">{product.dicountPercentage}% off</p>}
//           <div className="mt-4">
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
//         </div>
//       </div>
//     </div>
//   )
// }
// import { getProductById } from "@/sanity/lib/sanity"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/app/component/Button"
// import { addToCart } from "@/app/action"
// import AddToCartButton from "@/app/component/AddToCartButton"

// interface PageProps {
//   params: {
//     id: string
//   }
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await getProductById(params.id)

//   if (!product) {
//     return <div>Product not found</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/" className="text-blue-600 hover:underline">
//           &larr; Back to all products
//         </Link>
//         <Link href="/cart" className="flex items-center text-blue-600 hover:underline">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="mr-2"
//             aria-hidden="true"
//           >
//             <circle cx="9" cy="21" r="1"></circle>
//             <circle cx="20" cy="21" r="1"></circle>
//             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//           </svg>
//           <span>View Cart</span>
//         </Link>
//       </div>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//           <div className="flex items-center gap-2 my-2">
//             <span className="text-yellow-500 text-lg">★★★★★</span>
//             <span className="text-gray-500 text-sm">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
//           <p className="text-green-600 font-semibold mb-4">In Stock</p>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
//             <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//             <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
//             <div className="w-6 h-6 bg-black rounded-full"></div>
//           </div>
//           <div className="flex gap-4">
//             <Button variant="secondary">Select Options</Button>
//           </div>
//           {product.dicountPercentage > 0 && <p className="text-red-500 mt-4">{product.dicountPercentage}% off</p>}
//           <div className="mt-4">
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               >
//                 {tag}
//               </span>
//             ))}
//              <div className="flex gap-4">
//              <AddToCartButton
//               productId={product._id}
//               productName={product.title}
//               price={product.price}
//               imageUrl={product.imageUrl || "/placeholder.svg"}
//             />
//           </div>
//           </div>
//           {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
//         </div>
//       </div>
//     </div>
//   )
// }






// import { getProductById } from "@/sanity/lib/sanity";
// import Image from "next/image";
// import Link from "next/link";
// import AddToCartButton from "@/app/component/AddToCartButton";

// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function ProductPage({ params }: PageProps) {
//   const product = await getProductById(params.id);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-8">
//         <Link href="/" className="text-blue-600 hover:underline">
//           &larr; Back to all products
//         </Link>
//         <Link href="/cart" className="flex items-center text-blue-600 hover:underline">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="mr-2"
//             aria-hidden="true"
//           >
//             <circle cx="9" cy="21" r="1"></circle>
//             <circle cx="20" cy="21" r="1"></circle>
//             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//           </svg>
//           <span>View Cart</span>
//         </Link>
//       </div>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="relative aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.svg"}
//             alt={product.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 50vw"
//             style={{ objectFit: "cover" }}
//             className="rounded-lg"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
//           <div className="flex items-center gap-2 my-2">
//             <span className="text-yellow-500 text-lg">★★★★★</span>
//             <span className="text-gray-500 text-sm">(10 Reviews)</span>
//           </div>
//           <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
//           <p className="text-green-600 font-semibold mb-4">In Stock</p>
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
//             <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//             <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
//             <div className="w-6 h-6 bg-black rounded-full"></div>
//           </div>
//           <div className="flex gap-4">
//             {/* Use the AddToCartButton Client Component */}
//             <AddToCartButton productId={product.id} productName={product.title} />
//           </div>
//           {product.dicountPercentage > 0 && <p className="text-red-500 mt-4">{product.dicountPercentage}% off</p>}
//           <div className="mt-4">
//             {product.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
//         </div>
//       </div>
//     </div>
//   );
// }








import { getProductById } from "@/sanity/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import AddToCartButton from "@/app/component/AddToCartButton"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: PageProps) {
  let product
  try {
    product = await getProductById(params.id)
  } catch (error) {
    console.error("Error fetching product:", error)
    if ((error as Error).message === "Product not found") {
      notFound()
    }
    throw error // This will trigger the closest error.js boundary
  }

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back to all products
        </Link>
        <Link href="/CartPage" className="flex items-center text-blue-600 hover:underline">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg> */}
          <span>View Cart</span>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800 mb-2">${product.price.toFixed(2)}</p>
          <p className="text-green-600 font-semibold mb-4">In Stock</p>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
          <div className="flex gap-4">
            <AddToCartButton
              productId={product._id}
              productName={product.title}
              price={product.price}
              imageUrl={product.imageUrl || "/placeholder.svg"}
            />
          </div>
          {product.discountPercentage > 0 && <p className="text-red-500 mt-4">{product.discountPercentage}% off</p>}
          <div className="mt-4">
            {product.tags &&
              product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
          {product.isNew && <p className="text-green-500 font-semibold mt-4">New Product</p>}
        </div>
      </div>
    </div>
  )
}

