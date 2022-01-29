import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import api from '../../Api';

const Photo = () => {
  const [photo, setPhoto] = React.useState({});
  const params = useParams();
  const navigate = useNavigate(-1);

  React.useEffect(() => {
    api.getPhoto(params.id).then((photo) => setPhoto(photo));
    return (() => {
      setPhoto({})
    })
  }, [params.id]);

  const handleButtonReturn = () => {
    navigate(-1);
  };

  return (
    <div className="m-5">
      <button
        onClick={handleButtonReturn}
        className="p-3 bg-red-500 text-white"
      >
        Voltar
      </button>
      {photo === undefined ? (
        <Loading />
      ) : (
        <div className="m-2 shadow border p-5 w-80 m-auto">
          <img alt="Imagem" src={photo.url} />
          <h1 className="text-2xl mt-2">{photo.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Photo;
