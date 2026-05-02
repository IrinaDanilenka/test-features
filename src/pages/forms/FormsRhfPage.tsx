import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './FormsRhfPage.css'
import { useForm } from 'react-hook-form'

interface IInputForm {
  name: string
  email: string
  acceptPrivacy: boolean
}

function FormsRhfPage() {
  const { t } = useTranslation()
  const { register, handleSubmit, formState: { errors } } = useForm<IInputForm>({
    defaultValues: {
      name: 'John Doe',
      email: '',
      acceptPrivacy: false,
    },
  })

  const onSubmit = (data: IInputForm) => {
    console.log('Form submitted', data)
  }

  return (
    <div className="forms-rhf">
      <header className="forms-rhf__bar">
        <Link className="forms-rhf__back" to="/project/forms">
          {t('common.backToForms')}
        </Link>
      </header>

      <main className="forms-rhf__main">
        <p className="forms-rhf__eyebrow">{t('formsPage.experiment')}</p>
        <h1 className="forms-rhf__title">{t('formsPage.rhfTitle')}</h1>

        <form className="forms-rhf__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="forms-rhf__field">
            <label className="forms-rhf__label" htmlFor="name">
              {t('forms.labels.name')}
            </label>
            <input
              className="forms-rhf__input"
              type="text"
              id="name"
              aria-invalid={errors.name ? true : undefined}
              {...register('name', {
                required: t('forms.validation.nameRequired'),
                minLength: { value: 3, message: t('forms.validation.nameMin') },
                maxLength: { value: 10, message: t('forms.validation.nameMax') },
              })}
            />
            {errors.name && (
              <p className="forms-rhf__error" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="forms-rhf__field">
            <label className="forms-rhf__label" htmlFor="email">
              {t('forms.labels.email')}
            </label>
            <input
              className="forms-rhf__input"
              type="email"
              id="email"
              aria-invalid={errors.email ? true : undefined}
              {...register('email', {
                required: t('forms.validation.emailRequired'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('forms.validation.emailInvalid'),
                },
              })}
              autoComplete="email"
            />
            {errors.email && <p className="forms-rhf__error" role="alert">{errors.email.message}</p>}
          </div>

          <div className="forms-rhf__checks">
            <label className="forms-rhf__check">
              <input
                className="forms-rhf__checkbox"
                type="checkbox"
                id="acceptPrivacy"
                {...register('acceptPrivacy')}
              />
              <span className="forms-rhf__check-text">{t('forms.labels.acceptPrivacy')}</span>
            </label>
          </div>

          <button className="forms-rhf__submit" type="submit">
            {t('forms.submit')}
          </button>
        </form>
      </main>
    </div>
  )
}

export default FormsRhfPage
