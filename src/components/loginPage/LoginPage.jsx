import { NavLink } from 'react-router-dom';

import css from './loginPage.module.css';
import { useState } from 'react';

export const LoginPage = () => {
  const [rememberPassword, setRemember] = useState(true);

  return (
    <>
      {rememberPassword ? (
        <div className={css.regist__page}>
          <div className={css.regist__border}>
            <div className={css.register}>
              <form action="" className={css.regist__form}>
                <p className={css.regist__title}>Особистий кабінет</p>
                <input
                  type="text"
                  placeholder="Ім’я"
                  className={css.regist__input}
                />
                <input
                  type="text"
                  placeholder="Пароль"
                  className={css.regist__input}
                />
                <button type="submit" className={css.regist__button}>
                  Увійти
                </button>
                <p
                  className={css.login__link}
                  onClick={() => setRemember(false)}
                >
                  Забули пароль?
                </p>

                <NavLink to="/registr" className={css.regist__link}>
                  <p>В мене немає аккаунту.</p>
                  <p
                    className={`${css.regist__link} ${css.login__link__style}`}
                  >
                    Зареєструватися
                  </p>
                </NavLink>
              </form>
            </div>

            <div className={css.regist__images}>
              <div className={css.regist__dessert}>
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={css.regist__page}>
          <div className={css.regist__border}>
            <div className={css.register}>
              <form action="" className={css.regist__form}>
                <p className={`${css.regist__title} ${css.forgot__title}`}>
                  Забули пароль?
                </p>
                <p className={`${css.regist__link} ${css.forgot__title}`}>
                  Ми надішлемо код підтвердження <br /> на вашу електронну пошту
                </p>
                <input
                  type="text"
                  placeholder="Введіть Вашу електронну адресу"
                  className={css.regist__input}
                />
                <button type="submit" className={css.regist__button}>
                  Надіслати код
                </button>
              </form>
            </div>

            <div className={css.regist__images}>
              <div className={css.regist__dessert}>
                <img src="/" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
