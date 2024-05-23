import React from 'react'
import css from "./Headers.module.css"
import photo from "./photo.jpg"
import { NavLink } from 'react-router-dom'

const Headers = () => {
  return (
    <>
    <div>
      <div className={css.container_header}>
        <p className={css.header_text}>Доброго дня, Владислав!</p>
        <NavLink to='/registr' className={css.register_link}>Register</NavLink>
        <label className={css.header_label}>
        <input className={css.header_input} type="text" placeholder='Пошук' />
        <svg className={css.header_svg} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.8333 15.8333C7.15143 15.8333 4.16667 12.8486 4.16667 9.16667C4.16667 5.48477 7.15143 2.5 10.8333 2.5C14.5152 2.5 17.5 5.48477 17.5 9.16667C17.5 12.8486 14.5152 15.8333 10.8333 15.8333Z" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2.5 17.5L6.125 13.875" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </label>
     
        <img src={photo} alt="avatar" />
        <p className={css.name_person}>Мельник Владислав</p>
      </div>
    </div>
    </>
  )
}

export default Headers