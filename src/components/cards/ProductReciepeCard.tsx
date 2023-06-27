import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Ce_productRecipes from "../../types/product_reciepes";
import { Image } from "../../types/products";

const ProductReciepeCard: CardComponent<Ce_productRecipes> = ({
  result,
}: CardProps<Ce_productRecipes>): JSX.Element => {
  const productrecipe: Ce_productRecipes = result.rawData;
  const recipeCTA = productrecipe?.c_primaryCTA?.label
    ? productrecipe.c_primaryCTA.label
    : "";
  const recipeLink = productrecipe.c_primaryCTA.link
    ? productrecipe?.c_primaryCTA?.link
    : "#";
  return (
    <>
      <div className="productRecipeCard">
        {productrecipe?.photoGallery &&
          productrecipe?.photoGallery?.map((img: Image) => {
            return (
              <img key="" src={img.image.url} alt="" style={{ width: "20%" }} />
            );
          })}
        <div>{productrecipe.name && productrecipe?.name}</div>
        <a href={recipeLink}>{recipeCTA}</a>
      </div>
    </>
  );
};

export default ProductReciepeCard;
