import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

const PostTabs = ({ tab, errors, setTab, children }) => {
  const {t} = useTranslation();
  const tabs = useMemo(
    () => [
      {
        title: t("post_tabs.format"),
        fields: ["title", "excerpt", "content"],
        tabName: "format",
      },
      {
        title: t("post_tabs.info"),
        fields: ["original_post", "content_type", "category", "author"],
        tabName: "info",
      },
      {
        title: t("post_tabs.more_info"),
        fields: ["language", "published_at", "is_published"],
        tabName: "moreInfo",
      },
      {
        title: t("post_tabs.image"),
        fields: ["featured_image"],
        tabName: "image",
      },
    ],
    [t],
  );
  const selectActive = useCallback(() => {
    const err = Object.keys(errors);
    if (!err.length) setTab("view");
  }, [errors, setTab]);

  return (
    <nav className="post-tabs">
      {tabs?.map((e) => {
        const { tabName, title, fields } = e;
        const isActive = tab === tabName ? "active" : "";
        const err = Object.keys(errors);
        const isError = fields.some((field) => err.includes(field))
          ? "error"
          : "";

        return (
          <p
            key={tabName}
            className={`${isActive} ${isError}`}
            onClick={() => setTab(tabName)}
          >
            {title}
          </p>
        );
      })}
      {children}
      <p
        className={tab === "view" ? "active" : ""}
        disabled
        onClick={selectActive}
      >
        {t("post_tabs.view")}
      </p>
    </nav>
  );
};

export default PostTabs;
