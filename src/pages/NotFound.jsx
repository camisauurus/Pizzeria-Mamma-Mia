import errorImage from '../assets/imgs/error.jpg';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <img src={errorImage} alt="" />
      <h1>404 - Not Found</h1>
      <p>La página que buscas no existe :(</p>
      <Link to="/" className='volver'>Volver al inicio</Link>
    </div>
  );
}

export default NotFound;