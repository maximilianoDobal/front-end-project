import React from 'react'
import './FavoriteArtistCard.css'

const FavoriteArtistCard = () => {
  return (
    <div className="FavoriteArtistCardContainer">
        <img src="https://picsum.photos/200" alt="Foto Artista" className="favoriteArtistImage"/>
        <h5 className="orange-text">Nombre de Artista</h5>
        <p>Perfil</p>
    </div>
  )
}

export default FavoriteArtistCard