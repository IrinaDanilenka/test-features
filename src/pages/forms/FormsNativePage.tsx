import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './FormsNativePage.css'
import { useState } from 'react'

function FormsNativePage() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)

  const handleChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value

    if (text.length > 10) {
      setNameError(t('forms.native.nameTooLong'))
    } else {
      setNameError('')
    }

    setName(text)
  }

  const handleChangeEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const nextEmail = ev.target.value

    if (!nextEmail.includes('@')) {
      setEmailError(t('forms.native.emailInvalid'))
    } else {
      setEmailError('')
    }

    setEmail(nextEmail)
  }

  const handleChangeAcceptPrivacy = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptPrivacy(ev.target.checked)
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    console.log('Form submitted')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Accept Privacy:', acceptPrivacy)
  }

  return (
    <div className="forms-native">
      <header className="forms-native__bar">
        <Link className="forms-native__back" to="/project/forms">
          {t('common.backToForms')}
        </Link>
      </header>

      <main className="forms-native__main">
        <p className="forms-native__eyebrow">{t('formsPage.experiment')}</p>
        <h1 className="forms-native__title">{t('formsPage.nativeTitle')}</h1>

        <form className="forms-native__form" onSubmit={handleSubmit}>
          <div className="forms-native__field">
            <label className="forms-native__label" htmlFor="name">
              {t('forms.labels.name')}
            </label>
            <input className="forms-native__input" type="text" id="name" name="name" value={name} onChange={handleChangeName} />
            {nameError && <p className="forms-native__error">{nameError}</p>}
          </div>

          <div className="forms-native__field">
            <label className="forms-native__label" htmlFor="email">
              {t('forms.labels.email')}
            </label>
            <input
              className="forms-native__input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
            {emailError && <p className="forms-native__error">{emailError}</p>}
          </div>

          <div className="forms-native__checks">
            <label className="forms-native__check">
              <input
                className="forms-native__checkbox"
                type="checkbox"
                id="acceptPrivacy"
                name="acceptPrivacy"
                checked={acceptPrivacy}
                onChange={handleChangeAcceptPrivacy}
              />
              <span className="forms-native__check-text">{t('forms.labels.acceptPrivacy')}</span>
            </label>
          </div>

          <button className="forms-native__submit" type="submit" disabled={Boolean(nameError) || Boolean(emailError)}>
            {t('forms.submit')}
          </button>
        </form>
      </main>
    </div>
  )
}

export default FormsNativePage
