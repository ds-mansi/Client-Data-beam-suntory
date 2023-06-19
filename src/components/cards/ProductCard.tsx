import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Product from "../../types/products";

const ProductCard: CardComponent<Product> = ({
  result,
}: CardProps<Product>): JSX.Element => {
  const product: Product = result.rawData;

  return (
    <>
      <div className="">
        {product.photoGallery?.map((img: {image:{url:string}},index:number) => {
          return <img key={index} src={img.image.url} alt="" />;
        })}
        <div>{product.name}</div>

        <a href={product?.c_primaryCTA?.link}>{product?.c_primaryCTA?.label}</a>

        <a href={product?.c_secondaryCTA?.label}>{product?.c_secondaryCTA?.label}</a>
      </div>
    </>
  );
};

export default ProductCard;
