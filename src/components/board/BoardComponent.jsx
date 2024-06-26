import React from 'react';
import css from './Board.module.css';
import img_zax from './images/Frame22.jpg';
import img_zax_sec from './images/Frame23.jpg';
import rozkld from './images/rozkld.jpg';
import teach_f from "./images/Ellipse 1.jpg"
import teach_s from "./images/Ellipse 2.jpg"
import teach_t from "./images/Ellipse 3.jpg"

import avatar_a from "./images/avatar1.png"
import avatar_b from "./images/avatar2.png"
import avatar_c from "./images/avatar3.png"
import avatar_d from "./images/avatar4.png"
import avatar_e from "./images/avatar5.png"

const DashboardComponent = () => {
  return (
    <>
      <div className={css.container_board}>
        <div className={css.container_prog}>
          <p>Успішність</p>
          <div className={css.container_prog_list}>
            <ul className={css.progg_list}>
              <li>
                <p>Рейтинг</p>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1961 4.70589L25.3461 15.1392L36.8628 16.8226L28.5294 24.9392L30.4961 36.4059L20.1961 30.9892L9.89609 36.4059L11.8628 24.9392L3.52942 16.8226L15.0461 15.1392L20.1961 4.70589Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>
                    <span>8,5</span>/10
                  </p>
                </div>
              </li>
              <li>
                <p>Відео</p>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M38.3333 11.6667L26.6667 20L38.3333 28.3333V11.6667Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.3333 8.33333H4.99999C3.15904 8.33333 1.66666 9.82571 1.66666 11.6667V28.3333C1.66666 30.1743 3.15904 31.6667 4.99999 31.6667H23.3333C25.1743 31.6667 26.6667 30.1743 26.6667 28.3333V11.6667C26.6667 9.82571 25.1743 8.33333 23.3333 8.33333Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>
                    <span>40</span>/50
                  </p>
                </div>
              </li>
              <li>
                {' '}
                <p>Роботи</p>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.6667 18.4667V20C36.6646 23.594 35.5008 27.0911 33.3489 29.9697C31.1969 32.8483 28.1721 34.9541 24.7256 35.9732C21.279 36.9922 17.5954 36.8698 14.2241 35.6243C10.8528 34.3788 7.97442 32.0768 6.01826 29.0618C4.06211 26.0467 3.13298 22.4801 3.36946 18.8939C3.60593 15.3076 4.99534 11.8939 7.33046 9.16179C9.66558 6.4297 12.8213 4.52563 16.327 3.73357C19.8327 2.94151 23.5004 3.30389 26.7833 4.76667"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36.6667 6.66667L20 23.35L15 18.35"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>
                    <span>39</span>/50
                  </p>
                </div>
              </li>
              <li>
                <p>Оцінка</p>
                <div>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 25C26.4433 25 31.6667 19.7767 31.6667 13.3333C31.6667 6.89002 26.4433 1.66667 20 1.66667C13.5567 1.66667 8.33333 6.89002 8.33333 13.3333C8.33333 19.7767 13.5567 25 20 25Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.6833 23.15L11.6667 38.3333L20 33.3333L28.3333 38.3333L26.3167 23.1333"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>
                    <span>9,5</span>/10
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.container_zax}>
          <p>Заходи</p>
          <div>
            <ul className={css.zax_list}>
              <li>
                <img src={img_zax} alt="Технології" />
                <div>
                  <p className={css.zax_list_text}>
                    Вебінар про нові інструменти в minecraft
                  </p>
                  <p>30 травня 11:00</p>
                </div>
                <button>Зареєструватись</button>
              </li>
              <li>
                <img src={img_zax_sec} alt="Технології" />
                <div>
                  <p className={css.zax_list_text}>
                    Вебінар про нові інструменти в minecraft
                  </p>
                  <p>30 травня 11:00</p>
                </div>
                <button>Зареєструватись</button>
              </li>
            </ul>
          </div>
        </div>

        <img className={css.container_img} src={rozkld} alt="Розклад" />
      </div>

      <div className={css.container_second}>

       <div className={css.container_teachers}>
        <p>Викладачі</p>
        <ul className={css.teachers_list}>
          <li>
            <img src={teach_f} alt="avatar" />
            <div>
              <p className={css.name_teacher}>Maksym Melnik</p>
              <p>C++</p>
            </div>
          </li>
          <li>
            <img src={teach_s} alt="avatar" />
            <div>
              <p className={css.name_teacher}>Anastasiya Fam</p>
              <p>Java</p>
            </div>
          </li>
          <li>
            <img src={teach_t} alt="avatar" />
            <div>
              <p className={css.name_teacher}>Olya Palma</p>
              <p>Robotics</p>
            </div>
          </li>
        </ul>
       </div>

       <div className={css.container_chat}>
        <p>Чати</p>
        <ul className={css.chat_list}>
          <li>
            <img src={avatar_a} alt="" />
            <div>
              <p className={css.chat_name}>Zakhar Zanko</p>
              <p>Повідомленя</p>
            </div>
          </li>
          <li>
            <img src={avatar_b} alt="" />
            <div>
              <p className={css.chat_name}>Katya Baranova</p>
              <p>Повідомленя</p>
            </div>
          </li>
          <li>
            <img src={avatar_c} alt="" />
            <div>
              <p className={css.chat_name}>Roman Pstyha</p>
              <p>Повідомленя</p>
            </div>
          </li>
          <li>
            <img src={avatar_d} alt="" />
            <div>
              <p className={css.chat_name}>Arsen Woitek</p>
              <p>Повідомленя</p>
            </div>
          </li>
          <li>
            <img src={avatar_e} alt="" />
            <div>
              <p className={css.chat_name}>Ruslana Ostapchuk</p>
              <p>Повідомленя</p>
            </div>
          </li>
        </ul>
       </div>

      </div>
    </>
  );
};

export default DashboardComponent;
