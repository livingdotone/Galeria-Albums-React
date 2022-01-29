import React from 'react';
import api from '../Api';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';

const Photos = ({ id }) => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    api.getAlbumPhotos(id).then((photos) => setPhotos(photos));
    return (() => {
      setPhotos([])
    })
  }, [id]);

  return (
    <div>
      {photos.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-10">
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
