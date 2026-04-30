import * as Yup from "yup";

export const contentTypeSchema = Yup.object({
  name_ar: Yup.string()
    .required("validation.required")
    .min(2, "validation.min_length")
    .max(30),
  name_en: Yup.string()
    .required("validation.required")
    .min(2, "validation.min_length")
    .max(30),
  name_ku: Yup.string()
    .required("validation.required")
    .min(2, "validation.min_length")
    .max(30),
  priority: Yup.number().required("validation.required").min(0),
});
