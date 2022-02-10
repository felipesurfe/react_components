import React from 'react'
import ReactDOM from 'react-dom'

import { BoaTarde, BoaNoite } from './Componentes/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Maria" />
        <BoaNoite nome="Michelle"/>
    </div>
, document.getElementById('root'))