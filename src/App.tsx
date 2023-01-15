import Routes from "./Routes";
import style from './AppStyle.module.css';

const App = () => {

    return (
        <div className={style.container}>
            <header className={style.header}>
                Galeria de fotos
            </header>
                <Routes/>
            <footer className={style.footer}>
                Todos os direitos reservados
            </footer>
        </div>
    );
}

export default App;
