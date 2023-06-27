import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import Product from "../../types/products";

const ProductCard: CardComponent<Product> = ({
  result,
}: CardProps<Product>): JSX.Element => {
  const product: Product = result.rawData;
  const PrimaryCTALabel = product.c_primaryCTA?.label
    ? product?.c_primaryCTA?.label
    : "";
  const PrimaryCTALink = product.c_primaryCTA?.link
    ? product?.c_primaryCTA?.link
    : "#";
  const SecondaryCTALabel = product.c_secondaryCTA?.label
    ? product?.c_secondaryCTA?.label
    : "";
  const SecondaryCTALink = product.c_secondaryCTA?.link
    ? product?.c_secondaryCTA?.link
    : "#";
  return (
    <>
      <div className="productCard">
        {product.photoGallery?.map(
          (img: { image: { url: string } }, index: number) => {
            return (
              <img
                key={index}
                src={img?.image?.url}
                alt=""
                style={{ height: "50%" }}
              />
            );
          }
        )}
        <div>{product?.name}</div>

        <a href={PrimaryCTALink}>{PrimaryCTALabel}</a>

        <a href={SecondaryCTALink}>{SecondaryCTALabel}</a>
      </div>
    </>
  );
};

export default ProductCard;
