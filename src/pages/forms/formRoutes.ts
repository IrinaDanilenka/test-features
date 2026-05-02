export const FORM_EXPERIMENT_IDS = ['rhf', 'formik', 'native'] as const

export type FormExperimentId = (typeof FORM_EXPERIMENT_IDS)[number]

export function formExperimentPath(id: FormExperimentId) {
  return `/project/forms/${id}`
}
