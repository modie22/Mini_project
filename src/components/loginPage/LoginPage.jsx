import { NavLink } from 'react-router-dom';

import './loginPage.css';
import { useState } from 'react';

export const LoginPage = () => {
  const [rememberPassword, setRemember] = useState(true);

  return (
    <>
      {rememberPassword ? (
        <div className="regist__page">
          <div className="regist__border">
            <div className="register">
              <form action="" className="regist__form">
                <p className="regist__title">Особистий кабінет</p>
                <input
                  type="text"
                  placeholder="Ім’я"
                  className="regist__input"
                />
                <input
                  type="text"
                  placeholder="Пароль"
                  className="regist__input"
                />
                <button type="submit" className="regist__button">
                  Увійти
                </button>
                <p className="login__link" onClick={() => setRemember(false)}>
                  Забули пароль?
                </p>

                <NavLink to="/registr" className="regist__link">
                  <p>В мене немає аккаунту.</p>
                  <p className="regist__link login__link__style">
                    Зареєструватися
                  </p>
                </NavLink>
              </form>
            </div>

            <div className="regist__images">
              <div className="regist__dessert">
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="regist__page">
          <div className="regist__border">
            <div className="register">
              <form action="" className="regist__form">
                <p className="regist__title forgot__title">Забули пароль?</p>
                <p className="regist__link forgot__title">
                  Ми надішлемо код підтвердження <br /> на вашу електронну пошту
                </p>
                <input
                  type="text"
                  placeholder="Введіть Вашу електронну адресу"
                  className="regist__input"
                />
                <button type="submit" className="regist__button">
                  Надіслати код
                </button>
              </form>
            </div>

            <div className="regist__images">
              <div className="regist__dessert">
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
