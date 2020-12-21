import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Grad Apps',
        path: '/grad',
        icon: <FaIcons.FaUserGraduate />,
        cName: 'nav-text'

    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <MdIcons.MdDeveloperBoard />,
        cName: 'nav-text'

    },
    {
        title: 'Photography',
        path: '/photos',
        icon: <HiIcons.HiPhotograph />,
        cName: 'nav-text'

    },
    {
        title: 'Study Abroad',
        path: '/abroad',
        icon: <FaIcons.FaGlobeAfrica />,
        cName: 'nav-text'

    }
]
