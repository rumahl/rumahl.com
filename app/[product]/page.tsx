import {notFound} from 'next/navigation';
import {ProductPage,productNames,type ProductKey} from '@/components/rumahl/product-page';
export function generateStaticParams(){return Object.keys(productNames).map(product=>({product}))}
export async function generateMetadata({params}:{params:Promise<{product:string}>}){const {product}=await params;return {title:`${productNames[product as ProductKey]||'Page not found'} — rumahl`}}
export default async function Page({params}:{params:Promise<{product:string}>}){const{product}=await params;if(!Object.hasOwn(productNames,product))notFound();return <ProductPage product={product as ProductKey}/>}
