import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import './FormsFormikPage.css'

type FormikFormValues = {
  name: string
  email: string
  acceptPrivacy: boolean
}

function validate(values: FormikFormValues) {
  const errors: Partial<Record<keyof FormikFormValues, string>> = {}

  if (!values.name.trim()) {
    errors.name = 'Укажите имя'
  } else if (values.name.trim().length < 3) {
    errors.name = 'Минимум 3 символа'
  } else if (values.name.trim().length > 10) {
    errors.name = 'Максимум 10 символов'
  }

  if (!values.email.trim()) {
    errors.email = 'Укажите email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Некорректный email'
  }

  if (!values.acceptPrivacy) {
    errors.acceptPrivacy = 'Нужно принять политику конфиденциальности'
  }

  return errors
}

function FormsFormikPage() {
  return (
    <div className="forms-formik">
      <header className="forms-formik__bar">
        <Link className="forms-formik__back" to="/project/forms">
          ← К списку форм
        </Link>
      </header>

      <main className="forms-formik__main">
        <p className="forms-formik__eyebrow">Эксперимент</p>
        <h1 className="forms-formik__title">Formik</h1>

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
                  Name
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
                  Email
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
                  <span className="forms-formik__check-text">Accept Privacy</span>
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
                {isSubmitting ? 'Отправка…' : 'Submit'}
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  )
}

export default FormsFormikPage
