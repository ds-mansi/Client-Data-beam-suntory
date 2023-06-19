import StandardSection from "../sections/StandardSection";
import { VerticalConfig } from "../components/UniversalResults";
import ProductCard from "../components/cards/ProductCard";
import BlogCard from "../components/cards/BlogCard";
import FaqCard from "../components/cards/FaqCard";
import ProductReciepeCard from "../components/cards/ProductReciepeCard";

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  faqs: {
    SectionComponent: StandardSection,
    label: "FAQ",
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false,
    },
  },
  article: {
    SectionComponent: StandardSection,
    label: "Blogs",
    viewAllButton: true,
    cardConfig: {
      CardComponent: BlogCard,
      showOrdinal: false,
    },
  },
  recipes: {
    SectionComponent: StandardSection,
    label: "Recipes",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductReciepeCard,
      showOrdinal: false,
    },
  },
  products: {
    SectionComponent: StandardSection,
    label: "Products",
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductCard,
      showOrdinal: false,
    },
  },
};
