import Board from '../../Components/Board/Board';

import './Home.styles.css'

function Home(): JSX.Element {
    return (
        <div className="home-container">
            <h1 className='home-content'>Completa los espacios que faltan en la tarjeta de identidad arrastrando las palabras de la derecha hacia su lugar correspondiente en la imagen.</h1>
            <Board/>
        </div>
    )
}

export default Home;