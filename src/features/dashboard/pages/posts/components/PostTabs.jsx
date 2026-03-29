import { useCallback, useMemo } from "react";

const PostTabs = ({ tab, errors, setTab }) => {
  const tabs = useMemo(
    () => [
      {
        title: "المحتوى والتنسيق",
        fields: ["title", "excerpt", "content"],
        tabName: "format",
      },
      {
        title: "بيانات الخبر",
        fields: ["original_post", "content_type", "category", "author"],
        tabName: "info",
      },
      {
        title: "مزيد من التفاصيل",
        fields: ["language", "published_at", "is_published"],
        tabName: "moreInfo",
      },
      {
        title: "صورة العرض",
        fields: ["featured_image"],
        tabName: "image",
      },
    ],
    [],
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
      <p
        className={tab === "view" ? "active" : ""}
        disabled
        onClick={selectActive}
      >
        عرض
      </p>
    </nav>
  );
};

export default PostTabs;
