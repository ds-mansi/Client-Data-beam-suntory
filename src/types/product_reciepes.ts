import { CTA } from "./productTypes";

export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  map(
    arg0: (img: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export default interface Ce_productRecipes {
  c_primaryCTA: CTA;
  photoGallery: Image;
  name: string;
  c_receipes?: string[];
  c_recipePhoto?: Image;
}
