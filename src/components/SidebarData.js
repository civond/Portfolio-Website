import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im"

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'About Me',
        path: '/grad',
        icon: <ImIcons.ImProfile />,
        cName: 'nav-text'

    },
    {
        title: 'Coding Projects',
        path: '/projects',
        icon: <MdIcons.MdDeveloperBoard />,
        cName: 'nav-text'

    }
]
