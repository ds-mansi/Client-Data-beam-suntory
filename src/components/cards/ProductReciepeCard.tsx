import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Ce_productRecipes from "../../types/product_reciepes";
import { Image } from "../../types/products";

const ProductReciepeCard: CardComponent<Ce_productRecipes> = ({
  result,
}: CardProps<Ce_productRecipes>): JSX.Element => {
  const productrecipe: Ce_productRecipes = result.rawData;

  return (
    <>
      <div className="">
        {productrecipe?.photoGallery && productrecipe?.photoGallery?.map((img:Image)=>{
          return(
            <img src={img.image.url} alt="" />

          )
        })}
          <div>{productrecipe.name}</div>
        <a href={productrecipe?.c_primaryCTA?.link}>{productrecipe.c_primaryCTA?.label}</a>
      </div>
    </>
  );
};

export default ProductReciepeCard;
