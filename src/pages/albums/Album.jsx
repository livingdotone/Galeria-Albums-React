import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../Api';
import Photos from '../../components/Photos';
import { Loading } from '../../components/Loading';

const Album = () => {
  const [album, setAlbum] = React.useState({});
  const params = useParams();
  const navigate = useNavigate();

  const handleButtonReturn = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    api.getAlbum(params.id).then((album) => setAlbum(album));
    return (() => {
      setAlbum({})
    })
  }, [params.id]);

  return (
    <div className="m-5">
      <button
        onClick={handleButtonReturn}
        className="p-3 bg-red-500 text-white"
      >
        Voltar
      </button>
      {album === undefined ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-lg text-center">Album: {album.title}</h1>
          <Photos id={album.id} />
        </div>
      )}
    </div>
  );
};

export default Album;
