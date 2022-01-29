import React from 'react';
import api from '../../Api';
import { Link, useNavigate } from 'react-router-dom';

const Albums = () => {
  const [albums, setAlbums] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api.getAlbums().then((albums) => setAlbums(albums));
    setLoading(false);
  }, []);


  return (
    <div>
      {loading && <div>Carregando albums..</div>}
      <div className="grid grid-cols-6">
        {!loading &&
          albums.map((album) => (
            <Link
              to={`/albums/${album.id}`}
              className="block p-5 m-5 bg-gray-600 text-white hover:bg-gray-300 hover:text-black cursor-pointer shadow-lg"
            >
              {album.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Albums;
