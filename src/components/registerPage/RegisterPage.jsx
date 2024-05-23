import css from './registerPage.module.css';
import Registlogo from '../../img/team5.jpg';
import { NavLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div className={css.regist__page}>
      <div className={css.regist__border}>
        <div className={css.register}>
          <form action="" className={css.regist__form}>
            <p className={css.regist__title}>Реєстрація</p>
            <input
              type="text"
              placeholder="Ім’я"
              className={css.regist__input}
            />
            <input
              type="text"
              placeholder="Електронна адреса"
              className={css.regist__input}
            />
            <input
              type="text"
              placeholder="Пароль"
              className={css.regist__input}
            />
            <input
              type="text"
              placeholder="Повторіть пароль"
              className={css.regist__input}
            />
            <button type="submit" className={css.regist__button}>
              Зареєструватися
            </button>
            <NavLink to="/login" className={css.regist__link}>
              У мене вже є аккаунт
            </NavLink>
          </form>
        </div>
        <div className={css.regist__images}>
          <div className={css.regist__dessert}>
            <img src={Registlogo} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};
