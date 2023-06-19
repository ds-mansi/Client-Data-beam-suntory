import { CardComponent, CardConfigTypes } from "../models/cardComponent";
import {
  useSearchState,
  Result,
  useSearchActions,
} from "@yext/search-headless-react";
import classNames from "classnames";
import {
  CompositionMethod,
  useComposedCssClasses,
} from "../hooks/useComposedCssClasses";
import * as React from "react";

interface VerticalResultsCssClasses extends PaginationCssClasses {
  results___loading?: string;
}

const builtInCssClasses: VerticalResultsCssClasses = {
  results___loading: "opacity-50",
};

interface VerticalResultsDisplayProps {
  CardComponent: CardComponent;
  cardConfig?: CardConfigTypes;
  isLoading?: boolean;
  results: Result[];
  customCssClasses?: VerticalResultsCssClasses;
  cssCompositionMethod?: CompositionMethod;
}

/**
 * A Component that displays all the search results for a given vertical.
 *
 * @param props - The props for the Component, including the results and the card type
 *                to be used.
 */
export function VerticalResultsDisplay(
  props: VerticalResultsDisplayProps
): JSX.Element | null {
  const {
    CardComponent,
    results,
    cardConfig = {},
    isLoading = false,
    customCssClasses,
    cssCompositionMethod,
  } = props;
  const cssClasses = useComposedCssClasses(
    builtInCssClasses,
    customCssClasses,
    cssCompositionMethod
  );
  // const key = useSearchState((state) => state.vertical.verticalKey);

  if (results.length === 0) {
    return null;
  }

  const resultsClassNames = classNames({
    [cssClasses.results___loading ?? ""]: isLoading,
  });
  return (
    <>
      {results &&
        results.map((i) => {
          return (
            <>
            <div>
              {i.entityType === "faq" ? (
                <div className={resultsClassNames}>
                  {renderResult(CardComponent, cardConfig, i)}
                </div>
              ) : (
                <div className={resultsClassNames}>
                  {renderResult(CardComponent, cardConfig, i)}
                </div>
              )}
              </div>
            </>
          );
        })}

      {/* <div className={resultsClassNames} style={{ display: "flex" }}>
        {results &&
          results.map((result) =>
            renderResult(CardComponent, cardConfig, result)
          )}
          
      </div> */}
    </>
  );
}

/**
 * Renders a single result using the specified card type and configuration.
 *
 * @param CardComponent - The card for the vertical.
 * @param cardConfig - Any card-specific configuration.
 * @param result - The result to render.
 */
function renderResult(
  CardComponent: CardComponent,
  cardConfig: CardConfigTypes,
  result: Result
): JSX.Element {
  return (
    <CardComponent
      result={result}
      configuration={cardConfig}
      key={result.id || result.index}
    />
  );
}

interface VerticalResultsProps {
  CardComponent: CardComponent;
  cardConfig?: CardConfigTypes;
  displayAllOnNoResults?: boolean;
  customCssClasses?: VerticalResultsCssClasses;
  cssCompositionMethod?: CompositionMethod;
  allowPagination?: boolean;
}

export default function VerticalResults(
  props: VerticalResultsProps
): JSX.Element | null {
  const {
    displayAllOnNoResults = true,
    allowPagination = true,
    ...otherProps
  } = props;
  const verticalResults =
    useSearchState((state) => state.vertical.results) || [];
  const allResultsForVertical =
    useSearchState(
      (state) => state.vertical?.noResults?.allResultsForVertical.results
    ) || [];
  const verticalResultsCount =
    useSearchState((state) => state.vertical.resultsCount) || 0;
  const allResultsCountForVertical =
    useSearchState(
      (state) => state.vertical?.noResults?.allResultsForVertical.resultsCount
    ) || 0;
  const isLoading = useSearchState((state) => state.searchStatus.isLoading);
  const aleternateVerticals = useSearchState(
    (state) => state.vertical.noResults?.alternativeVerticals
  );

  let results = verticalResults;
  let resultsCount = verticalResultsCount;


  if (verticalResults.length === 0 && displayAllOnNoResults) {
    results = allResultsForVertical;
    resultsCount = allResultsCountForVertical;

    const filterVariable =
      aleternateVerticals?.filter(
        (filtredResulta) => filtredResulta.resultsCount > 0
      ) || [];
      
      const alternateVerticals =
      filterVariable.length > 0
        ? filterVariable.map((results: any) => {
          
            return (
              <>
                <a href={`/${results.verticalKey}`}>
                  <li>{results.verticalKey}</li>
                </a>
              </>
            );
          })
        : null;
    return (
      <div className="noResultFound">
        {filterVariable.length > 0 ? (
          <div>
            <p>No result found showing alternate vertical instead : </p>
            <ul>{alternateVerticals}</ul>
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }

  return (
    <>
      <VerticalResultsDisplay
        results={results}
        isLoading={isLoading}
        {...otherProps}
      />
      {allowPagination && (
        <Pagination
          numResults={resultsCount}
          customCssClasses={otherProps.customCssClasses}
          cssCompositionMethod={otherProps.cssCompositionMethod}
        />
      )}
    </>
  );
}

interface PaginationCssClasses {
  container?: string;
  labelContainer?: string;
  label?: string;
  selectedLabel?: string;
  leftIconContainer?: string;
  rightIconContainer?: string;
  icon?: string;
}

const builtInPaginationCssClasses: PaginationCssClasses = {
  container: "flex justify-center mb-4",
  labelContainer: "inline-flex shadow-sm -space-x-px",
  label:
    "z-0 inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300 text-gray-500",
  selectedLabel:
    "z-10 inline-flex items-center px-4 py-2 text-sm font-semibold border border-blue-600 text-blue-600 bg-blue-50",
  leftIconContainer:
    "inline-flex items-center px-3.5 py-2 border border-gray-300 rounded-l-md",
  rightIconContainer:
    "inline-flex items-center px-3.5 py-2 border border-gray-300 rounded-r-md",
  icon: "w-3 text-gray-500",
};

interface PaginationProps {
  numResults: number;
  customCssClasses?: PaginationCssClasses;
  cssCompositionMethod?: CompositionMethod;
}

/**
 * Renders a component that divide a series of results into chunks across multiple pages
 * and enable user to navigate between those pages.
 */
function Pagination(props: PaginationProps): JSX.Element | null {
  const { numResults, customCssClasses = {}, cssCompositionMethod } = props;
  const cssClasses = useComposedCssClasses(
    builtInPaginationCssClasses,
    customCssClasses,
    cssCompositionMethod
  );
  const answersAction = useSearchActions();
  const offset = useSearchState((state) => state.vertical.offset) || 0;
  const limit = useSearchState((state) => state.vertical.limit) || 10;

  const executeSearchWithNewOffset = (newOffset: number) => {
    answersAction.setOffset(newOffset);
    answersAction.executeVerticalQuery();
  };
  const onSelectNewPage = (evt: React.MouseEvent) => {
    const newPageNumber = Number(evt.currentTarget.textContent);
    newPageNumber && executeSearchWithNewOffset(limit * (newPageNumber - 1));
  };

  const maxPageCount = Math.ceil(numResults / limit);
  if (maxPageCount <= 1) {
    return null;
  }
  const pageNumber = offset / limit + 1;
  const paginationLabels: string[] = generatePaginationLabels(
    pageNumber,
    maxPageCount
  );

  return (
    //Pagination return
    // <div className={cssClasses.container}>
    //   <nav className={cssClasses.labelContainer} aria-label="Pagination">
    //     <button
    //       aria-label="Navigate to the previous results page"
    //       className={cssClasses.leftIconContainer}
    //       onClick={() => executeSearchWithNewOffset(offset - limit)}
    //       disabled={pageNumber === 1}
    //     >
    //       {/* <img src={PageNavigationIcon} className={cssClasses.icon + ' transform -rotate-90'}/> */}
    //     </button>
    //     {paginationLabels.map((label, index) => {
    //       switch (label) {
    //         case "...":
    //           return (
    //             <button key={index} className={cssClasses.label}>
    //               {label}
    //             </button>
    //           );
    //         case `${pageNumber}`:
    //           return (
    //             <button
    //               key={index}
    //               className={cssClasses.selectedLabel}
    //               onClick={onSelectNewPage}
    //             >
    //               {label}
    //             </button>
    //           );
    //         default:
    //           return (
    //             <button
    //               key={index}
    //               className={cssClasses.label}
    //               onClick={onSelectNewPage}
    //             >
    //               {label}
    //             </button>
    //           );
    //       }
    //     })}
    //     <button
    //       aria-label="Navigate to the next results page"
    //       className={cssClasses.rightIconContainer}
    //       onClick={() => executeSearchWithNewOffset(offset + limit)}
    //       disabled={pageNumber === maxPageCount}
    //     >
    //       {/* <img src={PageNavigationIcon} className={cssClasses.icon + ' transform rotate-90'} /> */}
    //     </button>
    //   </nav>
    // </div>
    <></>
  );
}

function generatePaginationLabels(
  pageNumber: number,
  maxPageCount: number
): string[] {
  const paginationLabels: string[] = [];
  const previousPageNumber = pageNumber - 1;
  const nextPageNumber = pageNumber + 1;

  if (previousPageNumber > 3) {
    paginationLabels.push("1", "...", `${previousPageNumber}`);
  } else if (previousPageNumber !== 0) {
    [...Array(previousPageNumber)].forEach((_, index) =>
      paginationLabels.push(`${index + 1}`)
    );
  }
  paginationLabels.push(`${pageNumber}`);
  if (maxPageCount - nextPageNumber > 2) {
    paginationLabels.push(`${nextPageNumber}`, "...", `${maxPageCount}`);
  } else if (nextPageNumber <= maxPageCount) {
    [...Array(maxPageCount - nextPageNumber + 1)].forEach((_, index) =>
      paginationLabels.push(`${nextPageNumber + index}`)
    );
  }
  return paginationLabels;
}
