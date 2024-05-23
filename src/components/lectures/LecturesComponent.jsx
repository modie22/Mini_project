import React from 'react'
import css from "./lectures.module.css"
import ficon from "./firsticon.png"
import oneimg from "./oneimg.png"
import poneimg from "./poneimg.png"
import ptwoimg from "./ptwoimg.png"
import p3img from "./p3img.png"
import dots from "./dots.png"
import img2 from "./img2.png"
import p4img from "./p4img.png"
import p5img from "./p5img.png"
import p6img from "./p6img.png"
import img3 from "./img3.png"
import p7img from "./p7img.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
import p8img from "./p8img.png"
import img6 from "./img6.png"
import img7 from "./img7.png"

const LecturesComponent = () => {
  return (
    <>
      <div>
        <div>
          <h2 className={css.title}>Лекції</h2>
          <div className={css.lecture}>
            <div className={css.lecture__title}>
            <p className={css.lecture__text}>#</p>
            <p className={css.lecture__text} >Фото</p>
            <p className={css.lecture__text}>ПІБ</p>
            <p className={css.lecture__text}>Логін</p>
            <p className={css.lecture__text}>Проекти</p>
            <p className={css.lecture__text}>Редагувати</p>
            </div>
            <div>
            <ul className={css.lecture__list}>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={oneimg} alt="" />
                </div>
                <p className={css.containertext}>Занько З. Р.</p>
                <p>zakzan</p>
                <div className={css.projectimg}>
                  <img src={poneimg} alt="" />
                  <img src={ptwoimg} alt="" />
                  <img src={p3img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img2} alt="" />
                </div>
                <p className={css.containertext}>Дерев’яненко А. М.</p>
                <p>artem_derev</p>
                <div className={css.projectimg}>
                  <img src={p4img} alt="" />
                  <img src={p5img} alt="" />
                  <img src={p6img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img3} alt="" />
                </div>
                <p className={css.containertext}>Дімпул Є. Є.</p>
                <p>zheniadimpul</p>
                <div className={css.projectimg}>
                  <img src={poneimg} alt="" />
                  <img src={p4img} alt="" />
                  <img src={p7img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img4} alt="" />
                </div>
                <p className={css.containertext}>Лук’яненко Д. А.</p>
                <p>l.daryna.a</p>
                <div className={css.projectimg}>
                  <img src={p5img} alt="" />
                  <img src={ptwoimg} alt="" />
                  <img src={p3img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img5} alt="" />
                </div>
                <p className={css.containertext}>Пстига Ю. А.</p>
                <p>juliapstyga</p>
                <div className={css.projectimg}>
                  <img src={p8img} alt="" />
                  <img src={poneimg} alt="" />
                  <img src={p6img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img6} alt="" />
                </div>
                <p className={css.containertext}>Приходько М. С</p>
                <p>maksprehot</p>
                <div className={css.projectimg}>
                  <img src={p4img} alt="" />
                  <img src={p8img} alt="" />
                  <img src={p6img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
              <li className={css.lecture__item}>
                <div className={css.containerimg}>
                <img src={ficon} alt="" />
                <img src={img7} alt="" />
                </div>
                <p className={css.containertext}>Зубаха М. І.</p>
                <p>maks_zub</p>
                <div className={css.projectimg}>
                  <img src={p5img} alt="" />
                  <img src={poneimg} alt="" />
                  <img src={p3img} alt="" />
                </div>
                <img src={dots} alt=""  className={css.dots}/>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LecturesComponent
