

import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'



import App from './pages/App'


import './index.scss'



import { ROOT_ELEMENT_ID } from './constants/main'




import type { Root } from 'react-dom/client'




const baseContainer: HTMLElement = document.getElementById(ROOT_ELEMENT_ID) as HTMLElement


const root: Root = createRoot(baseContainer)


root.render(<StrictMode>

    <App />

</StrictMode>)
