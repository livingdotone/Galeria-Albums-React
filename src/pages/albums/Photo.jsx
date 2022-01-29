import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../Api'

const Photo = () => {

  const [photo, setPhoto] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const params = useParams()
  const navigate = useNavigate(-1);

  React.useEffect(() => {
    api.getPhoto(params.id).then(photo => setPhoto(photo))
    setLoading(false)
  }, [params.id])

  const handleButtonReturn = () => {
    navigate(-1)
  }

  return <div className="m-5">
    <button onClick={handleButtonReturn} className="p-3 bg-red-500 text-white">Voltar</button>
     {loading && <div>Carregando foto..</div>}
     {!loading && (
       <div className="m-2">
         <img alt="Imagem" src={photo.url}/>
         <h1 className="text-2xl">{photo.title}</h1>
       </div>
     )}
  </div>;
};

export default Photo;
