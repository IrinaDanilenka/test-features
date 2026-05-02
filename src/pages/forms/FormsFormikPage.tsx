import { Link } from 'react-router-dom'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import './FormsFormikPage.css'

type FormikFormValues = {
  name: string
  email: string
  acceptPrivacy: boolean
}

function FormsFormikPage() {
  const { t } = useTranslation()

  const validate = useCallback(
    (values: FormikFormValues) => {
      const errors: Partial<Record<keyof FormikFormValues, string>> = {}

      if (!values.name.trim()) {
        errors.name = t('forms.validation.nameRequired')
      } else if (values.name.trim().length < 3) {
        errors.name = t('forms.validation.nameMin')
      } else if (values.name.trim().length > 10) {
        errors.name = t('forms.validation.nameMax')
      }

      if (!values.email.trim()) {
        errors.email = t('forms.validation.emailRequired')
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = t('forms.validation.emailInvalid')
      }

      if (!values.acceptPrivacy) {
        errors.acceptPrivacy = t('forms.validation.privacyRequired')
      }

      return errors
    },
    [t],
  )

  return (
    <div className="forms-formik">
      <header className="forms-formik__bar">
        <Link className="forms-formik__back" to="/project/forms">
          {t('common.backToForms')}
        </Link>
      </header>

      <main className="forms-formik__main">
        <p className="forms-formik__eyebrow">{t('formsPage.experiment')}</p>
        <h1 className="forms-formik__title">{t('formsPage.formikTitle')}</h1>

        <Formik<FormikFormValues>
          initialValues={{
            name: '',
            email: '',
            acceptPrivacy: false,
          }}
          validate={validate}
          validateOnChange={false}
          validateOnBlur
          onSubmit={(values, { setSubmitting }) => {
            console.log('Form submitted', values)
            setSubmitting(false)
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="forms-formik__form" noValidate>
              <div className="forms-formik__field">
                <label className="forms-formik__label" htmlFor="formik-name">
                  {t('forms.labels.name')}
                </label>
                <Field
                  id="formik-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={errors.name && touched.name ? true : undefined}
                  className={
                    errors.name && touched.name
                      ? 'forms-formik__input forms-formik__input--invalid'
                      : 'forms-formik__input'
                  }
                />
                <ErrorMessage name="name">
                  {msg => (
                    <p className="forms-formik__error" role="alert">
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>

              <div className="forms-formik__field">
                <label className="forms-formik__label" htmlFor="formik-email">
                  {t('forms.labels.email')}
                </label>
                <Field
                  id="formik-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.email && touched.email ? true : undefined}
                  className={
                    errors.email && touched.email
                      ? 'forms-formik__input forms-formik__input--invalid'
                      : 'forms-formik__input'
                  }
                />
                <ErrorMessage name="email">
                  {msg => (
                    <p className="forms-formik__error" role="alert">
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>

              <div className="forms-formik__checks">
                <label className="forms-formik__check">
                  <Field
                    id="formik-acceptPrivacy"
                    name="acceptPrivacy"
                    type="checkbox"
                    className="forms-formik__checkbox"
                    aria-invalid={errors.acceptPrivacy && touched.acceptPrivacy ? true : undefined}
                  />
                  <span className="forms-formik__check-text">{t('forms.labels.acceptPrivacy')}</span>
                </label>
                <ErrorMessage name="acceptPrivacy">
                  {msg => (
                    <p className="forms-formik__error forms-formik__error--inline" role="alert">
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>

              <button className="forms-formik__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('forms.submitting') : t('forms.submit')}
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  )
}

export default FormsFormikPage
