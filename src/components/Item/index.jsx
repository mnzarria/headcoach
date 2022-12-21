import React from 'react'
import './styles.css'

const Item = ({title}) => {
  return (
    <div className="card" style={{width: '13rem'}}>
      <img src="https://www.cronista.com/files/image/479/479650/632c94d41dc87.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Lionel Andres</p>
        <a href="/#" className="btn btn-primary">Agregar al equipo</a>
      </div>
    </div>
  )
}
export default Item