import * as Yup from "yup";

export const categoriesSchema = Yup.object({
  name_ar: Yup.string().required().min(2).max(30),
  name_en: Yup.string().required().min(2).max(30),
  name_ku: Yup.string().required().min(2).max(30),
});
