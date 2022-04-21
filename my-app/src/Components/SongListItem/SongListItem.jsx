import React from 'react'
import './SongListItem.css'

const SongListItem = () => {
  return (
    <li className="listItemContainer">
        <div className="listInfoContainer">
            <img src="https://picsum.photos/50" alt="Imagen Cancion" />
            <div className="listInfoContainer--children">
                <h5 className="orange-text">Nombre de la cancion</h5>
                <p>Artistas de la cancion</p>
            </div>
        </div>
        <p>03:30</p>
    </li>
  )
}

export default SongListItem