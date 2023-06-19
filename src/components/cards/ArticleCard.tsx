import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import RtfConverter from "@yext/rtf-converter";
import Ce_blogs from "../../types/blogs";

const ArticleCard: CardComponent<Ce_blogs> = ({
  result,
}: CardProps<Ce_blogs>): JSX.Element => {
  const blog: Ce_blogs = result.rawData;

  return (
    <>
      <div className="text-2xl">{blog.name}</div>

      <div
        className="blogs-card"
        dangerouslySetInnerHTML={{
          __html: blog?.c_bodyOption1
            ? RtfConverter.toHTML(blog?.c_bodyOption1)
            : "",
        }}
      ></div>

      <div
        className="blogs-card"
        dangerouslySetInnerHTML={{
          __html: blog?.c_bodyOption2
            ? RtfConverter.toHTML(blog?.c_bodyOption2)
            : "",
        }}
      ></div>

      <div
        className="blogs-card"
        dangerouslySetInnerHTML={{
          __html: blog?.c_bodyOption3
            ? RtfConverter.toHTML(blog?.c_bodyOption3)
            : "",
        }}
      ></div>
    </>
  );
};

export default ArticleCard;
