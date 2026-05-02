import { Link } from 'react-router-dom'
import './FormsRhfPage.css'
import { useForm } from 'react-hook-form';

interface IInputForm {
  name: string;
  email: string;
  acceptPrivacy: boolean;
}

function FormsRhfPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<IInputForm>({
    defaultValues: {
      name: 'John Doe',
      email: '',
      acceptPrivacy: false,
    },
  })

  const onSubmit = (data: IInputForm) => {
    console.log('Form submitted', data)
    // console.log('Name:', name);
    // console.log('Email:', email);
    // console.log('Accept Privacy:', acceptPrivacy);
  }

  return (
    <div className="forms-rhf">
      <header className="forms-rhf__bar">
        <Link className="forms-rhf__back" to="/project/forms">
          ← К списку форм
        </Link>
      </header>

      <main className="forms-rhf__main">
        <p className="forms-rhf__eyebrow">Эксперимент</p>
        <h1 className="forms-rhf__title">React Hook Form</h1>
  
        <form className="forms-rhf__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="forms-rhf__field">
            <label className="forms-rhf__label" htmlFor="name">
              Name
            </label>
            <input
              className="forms-rhf__input"
              type="text"
              id="name"
              aria-invalid={errors.name ? true : undefined}
              {...register('name', {
                required: 'Укажите имя',
                minLength: { value: 3, message: 'Минимум 3 символа' },
                maxLength: { value: 10, message: 'Максимум 10 символов' },
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
              Email
            </label>
            <input
              className="forms-rhf__input"
              type="email"
              id="email"
              aria-invalid={errors.email ? true : undefined}
              {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email is invalid' } })}
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
              <span className="forms-rhf__check-text">Accept Privacy</span>
            </label>
          </div>

          <button className="forms-rhf__submit" type="submit">
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default FormsRhfPage
