import * as yup from "yup";
export const surveySchema = yup.object({
  question: yup.string().required("validation.required").min(10).max(255),
  is_active: yup.boolean().default(true).required("validation.required"),
  closes_at: yup
    .date()
    .required("validation.required")
    .min(new Date(), "validation.min_date"),
  options: yup
    .array()
    .of(
      yup.object().shape({
        option_text: yup
          .string()
          .required("validation.required")
          .min(2, "validation.min_length"),
      }),
    )
    .min(1),
});
