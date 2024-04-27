import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/theme-common";
import DocCard from "@theme/DocCard";

function DocCardListForCurrentSidebarCategory({ className }) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

function DefaultDocCardList(props) {
  console.warn("DefaultDocCardList: ", JSON.stringify(props, null, 2));

  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section className={clsx("row", className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}

function MyDocCardList({ props }) {
  console.warn("MyDocCardList: ", JSON.stringify(props, null, 2));

  props.className =
    "list_node_modules-@docusaurus-theme-classic-lib-theme-DocCategoryGeneratedIndexPage-styles-module";

  const { items, className } = props;

  return (
    <section className={clsx("row", className)}>
      {items.map((item, index) => (
        <article key={index} className="col col--6 margin-bottom--lg">
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}

const hasKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

export default function DocCardList(props) {
  console.warn("DocCardList: ", JSON.stringify(props, null, 2));

  if (hasKey(props, "props")) {
    if (props.props.custom) {
      return <MyDocCardList {...props} />;
    }
  } else {
    return <DefaultDocCardList {...props} />;
  }
}
