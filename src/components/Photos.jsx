import React from 'react';
import api from '../Api';
import { Link } from 'react-router-dom'

const Photos = ({ id }) => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api.getAlbumPhotos(id).then((photos) => setPhotos(photos));
    setLoading(false);
  }, [id]);

  return (
    <div>
      {loading && <div>Carregando fotos da galeria...</div>}
      {!loading && (
        <div className="grid grid-cols-12">
          {photos.map((photo) => (
            <Link to={`photo/${photo.id}`}>
            <div className="p-2 border shadow text-white m-4 w-32">
                <img
                  alt="Imagem"
                  src={photo.thumbnailUrl}
                  className="max-w-full min-h-full h-full object-cover"
                />
            </div>
              </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
