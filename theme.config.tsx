import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { GitTimestamp } from "./UI/GitTimestamp";

const emptyResult = (
    <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        Ничего не найдено
    </span>
)

// config

const config: DocsThemeConfig = {
    logo: <span>DevInsider wiki</span>,
    project: {
        link: 'https://github.com/Yeroshenko/personal_wiki',
    },
    footer: {
        component: () => null,
    },
    search: {
        emptyResult,
        placeholder: 'Поиск по wiki',
    },
    feedback: {
        content: () => null,
    },
    editLink: {
        component: () => null,
    },
    gitTimestamp: GitTimestamp,
    toc: {
        title: 'Оглавление',
    }

}

export default config
