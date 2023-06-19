import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import { answersHeadlessConfig } from "../config/answersHeadlessConfig";
import "../index.css";
import {
  SearchBar,
  SpellCheck,
  ResultsCount,
  Pagination,
  DirectAnswer,
  AppliedFilters,
  LocationBias,
  VerticalResults
} from "@yext/search-ui-react";
// import VerticalResults from "../components/VerticalResults";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import "../index.css";
import Navigation from "../components/Navigation";
// import Header from "../components/Common/Header";
// import Footer from "../components/Common/Footer";
import ProductCard from "../components/cards/ProductCard";

export const getPath: GetPath<TemplateProps> = () => {
  return "products";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Beam Suntory`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

answersHeadlessConfig.verticalKey = "products";
const searcher = provideHeadless(answersHeadlessConfig);

const Product: Template<TemplateRenderProps> = (document) => {
  return (
    <>
    {/* <Header props={document.document._site}/> */}
      <SearchHeadlessProvider searcher={searcher}>
        <div className="px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-col">
            <SearchBar placeholder="SEARCH YOUR QUERY HERE" />
            <Navigation />
            <DirectAnswer />
            <SpellCheck />
            <ResultsCount />
            <AppliedFilters hiddenFields={["builtin.entityType"]} />
            <VerticalResults CardComponent={ProductCard} />
            <LocationBias />
          </div>
          <Pagination />
        </div>
      </SearchHeadlessProvider>
      {/* <Footer props={document.document._site}/> */}
    </>
  );
};

export default Product;
