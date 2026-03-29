import { useCallback } from "react";
import { allTyps } from "../../../../../constant/enums";

const PostTyps = ({ filters, setFilters }) => {
  const selectType = useCallback(
    (content_type) => {
      setFilters((p) => ({ ...p, content_type }));
    },
    [setFilters],
  );

  return (
    <div className="post-categories">
      <button
        className={!filters?.content_type ? "active" : ""}
        onClick={() => selectType("")}
      >
        all
      </button>
      {allTyps?.map((e) => (
        <button
          key={e}
          className={filters?.content_type === e ? "active" : ""}
          style={{
            "--main-color": `var(--color-${e})`,
          }}
          onClick={() => selectType(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
};

export default PostTyps;
