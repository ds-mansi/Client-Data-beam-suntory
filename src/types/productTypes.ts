export type CTA = {
  label?: string;
  link?: string;
  linkType?: string;
};
export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
  url: string;
  alternateText?: string;
}
export interface productTypeData {
  cta?: CTA;
  image?: Image;
  heading?: string | "";
  description?:string | "";
}

export interface productData  {
  c_productCard?: productTypeData;
  id?: number;
  type?: string;
  name?: string;
}


// export interface ProductCard {
//     cta: {
//       label: string;
//       link: URL;
//     };
//     image: {
//       height: number;
//       sourceUrl: string;
//       thumbnails: {
//         // Define the structure of the thumbnails objects
//         // Example: { url: string, width: number, height: number }
//         // Adjust the structure based on the actual data
//         url: string;
//         width: number;
//         height: number;
//       }[];
//       url: string;
//       width: number;
//     };
//     // Add other properties as needed
//     // Example: link: string, linkType: string, etc.
//   }
  
//  export  interface Product {
//     id: string;
//     type: string;
//     name: string;
//     c_productCard: ProductCard;
//     uid: string;
//   }