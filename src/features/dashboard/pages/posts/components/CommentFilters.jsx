import { useMemo } from "react";
import SelectOptionInput from "../../../../../components/inputs/SelectOptionInput";
import { useTranslation } from "react-i18next";

const CommentFilters = ({ selectValue, filters, actions }) => {
  const { t } = useTranslation();

  const approvedPlaceholder = useMemo(() => {
    if (typeof filters?.is_approved === "boolean") {
      return filters?.is_approved ? t("common.approved") : t("common.not_approved");
    }
    return t("common.all");
  }, [filters?.is_approved, t]);

  return (
    <div>
      {actions && (
        <SelectOptionInput
          customOptions={[
            { 
              title: t("common.all"), 
              onChange: () => selectValue("is_approved", null) 
            },
          ]}
          label={t("common.comment_status")}
          notRequired
          options={[
            {
              text: t("common.approved"),
              value: true,
            },
            {
              text: t("common.not_approved"),
              value: false,
            },
          ]}
          placeholder={approvedPlaceholder}
          onSelectOption={(e) => selectValue("is_approved", e.value)}
        />
      )}
      <SelectOptionInput
        label={t("common.comment_status")}
        notRequired
        options={[
          {
            text: t("common.latest_comments"),
            value: "-created_at",
          },
          {
            text: t("common.oldest_comments"),
            value: "created_at",
          },
        ]}
        placeholder={filters?.created_at?.text}
        onSelectOption={(e) => selectValue("created_at", e)}
      />
    </div>
  );
};

export default CommentFilters;