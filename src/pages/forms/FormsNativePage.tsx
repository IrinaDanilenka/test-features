import { Link } from 'react-router-dom'
import './FormsNativePage.css'
import { useState } from 'react';

function FormsNativePage() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const handleChangeName = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const text = ev.target.value;

    if (text.length > 10) {
      setNameError('Name must be less than 10 characters');
    } else {
      setNameError('');
    }

    setName(text);
  }

  const handleChangeEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const email = ev.target.value;

    if (!email.includes('@')) {
      setEmailError('Email must be a valid email address');
    } else {
      setEmailError('');
    }

    setEmail(ev.target.value);
  }

  const handleChangeAcceptPrivacy = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptPrivacy(ev.target.checked);
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    console.log('Form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Accept Privacy:', acceptPrivacy);
  }

  return (
    <div className="forms-native">
      <header className="forms-native__bar">
        <Link className="forms-native__back" to="/project/forms">
          ← К списку форм
        </Link>
      </header>

      <main className="forms-native__main">
        <p className="forms-native__eyebrow">Эксперимент</p>
        <h1 className="forms-native__title">Без библиотеки</h1>

        <form className="forms-native__form" onSubmit={handleSubmit}>
          <div className="forms-native__field">
            <label className="forms-native__label" htmlFor="name">
              Name
            </label>
            <input className="forms-native__input" type="text" id="name" name="name" value={name} onChange={handleChangeName}/>
            {nameError && <p className="forms-native__error">{nameError}</p>}
          </div>

          <div className="forms-native__field">
            <label className="forms-native__label" htmlFor="email">
              Email
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
              <input className="forms-native__checkbox" type="checkbox" id="acceptPrivacy" name="acceptPrivacy" checked={acceptPrivacy} onChange={handleChangeAcceptPrivacy} />
              <span className="forms-native__check-text">Accept Privacy</span>
            </label>
          </div>

          <button className="forms-native__submit" type="submit" disabled={Boolean(nameError) || Boolean(emailError)}>
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default FormsNativePage
