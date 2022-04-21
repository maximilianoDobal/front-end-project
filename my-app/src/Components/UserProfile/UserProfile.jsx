import React from "react";
import FavoriteArtistCard from "../FavoriteArtistCard/FavoriteArtistCard";
import FavoriteSongList from "../FavoriteSongList/FavoriteSongList";
import './UserProfile.css'

const UserProfile = () => {
  return (
    <div className="userProfileContainer">
      <div className="userTopContainer">
        {/* imagen de perfil */}
      <img
        src="https://picsum.photos/200"
        alt="imagen de perfil"
        className="perfilImg"
      />
        {/* Nombre la cuenta */}
        <div className="userTopContainer--children">
          <p>Perfil</p>
          <h1>Fulanito Fulanito</h1>
          <p>User ID: XXXXXXXXXXXX</p>

        </div>
      </div>
      <div>
        <h3>Canciones favoritas</h3>
        <FavoriteSongList />
      </div>
      <div>
        <h3>Artistas favoritos</h3>
        <div  className="favoriteArtistContainer">
          <FavoriteArtistCard />
          <FavoriteArtistCard />
          <FavoriteArtistCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
