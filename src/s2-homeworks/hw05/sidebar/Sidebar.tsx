import React, {FC, useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

type FiltertValueType = "preJunior" | "junior" | "juniorPlus"

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    const [filterValue, setFilterValue] = useState<FiltertValueType>("preJunior")

    const onclickHandler = (newFilterValue: FiltertValueType) => {
        setFilterValue(newFilterValue)
        handleClose()
    }

    return (
        <>
            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <button className={s.close} onClick={handleClose}>
                    <img
                        src={closeIcon}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                    />
                </button>

                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={()=>onclickHandler("preJunior")}
                        className={filterValue==="preJunior" ? s.active : ""}
                        // className={...} // делает студент
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={()=>onclickHandler("junior")}
                        className={filterValue==="junior" ? s.active : ""}
                        // className={...} // делает студент
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={()=>onclickHandler("juniorPlus")}
                        className={filterValue==="juniorPlus" ? s.active : ""}
                        // className={...} // делает студент
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
