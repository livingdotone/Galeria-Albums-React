import React from 'react';
import api from '../../Api';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/Loading'

const Albums = () => {
  const [albums, setAlbums] = React.useState([]);

  React.useEffect(() => {
    api.getAlbums().then((albums) => setAlbums(albums));
    return (() => {
      setAlbums([])
    })
  }, []);

  return (
    <div>
      {albums.length === 0 ? <Loading/> : (
         <div className="grid grid-cols-6">
         {albums.map((album) => (
             <Link
               to={`/albums/${album.id}`}
               className="block p-5 m-5 bg-gray-600 text-white hover:bg-gray-300 hover:text-black cursor-pointer shadow-lg"
             >
               {album.title}
             </Link>
           ))}
       </div>
      )}
    </div>
  );
};

export default Albums;
