import * as yup from "yup";
export const surveySchema = yup.object({
  question: yup.string().required(),
  is_active: yup.boolean().default(true).required(),
  closes_at: yup.date().required(),
  options: yup
    .array()
    .of(
      yup.object().shape({
        option_text: yup.string().required(),
      }),
    )
    .min(1),
});
