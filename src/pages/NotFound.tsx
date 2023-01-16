import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Página não existente, retorne para home clicando <Link to={'/'}>aqui</Link>.
        </div>
    )
}

export default NotFound;