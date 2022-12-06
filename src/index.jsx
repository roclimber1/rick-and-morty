

import React from 'react'

import { createRoot } from 'react-dom/client'



import App from 'src/pages/App'


import 'src/index.scss'



import { ROOT_ELEMENT_ID } from './constants/main'





const baseContainer = document.getElementById(ROOT_ELEMENT_ID)




const root = createRoot(baseContainer)

root.render(<App />)
