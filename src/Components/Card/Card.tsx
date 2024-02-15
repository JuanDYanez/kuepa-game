/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import './Card.styles.css'
import { useDrop } from 'react-dnd';

interface OptionsProps {
    cardInfo: {
        forename: string;
        surname: string;
        nationality: string;
        age: number;
        picture: string;
        color: string;
    }
}

function Card({cardInfo, interactiveData}: OptionsProps): JSX.Element {
        
    const level = useSelector((state) => state.level)

    const [{ isOver: isOverAge }, dropAge] = useDrop(() => ({
        accept: 'option',
        drop: (item) => addItemToSection(item.id, 'age'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const [{ isOver: isOverNationality }, dropNationality] = useDrop(() => ({
        accept: 'option',
        drop: (item) => addItemToSection(item.id, 'nationality'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const [{ isOver: isOverSurname }, dropSurname] = useDrop(() => ({
        accept: 'option',
        drop: (item) => addItemToSection(item.id, 'surname'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
    

    const addItemToSection = (id, section) => {
        console.log(`dropped ${id} to ${section}`);
    }

    return (
        <div className="card-container">
            <div className="header">
                <h1 className='header-title'>Tarjeta de Identidad</h1>
                <img className='header-image' src="RD-Flag-02.svg" alt="Bandera de República Dominicana"/>
            </div>
            <div className="content">
                <div className="content-picture">
                    <img src={cardInfo.picture} alt="Foto del titular"/>
                </div>
                <div className="content-info">
                    <strong>Nombres:</strong>
                    <div className='content-info-item'>{cardInfo.forename}</div>
                    <strong>Apellidos:</strong>
                    {level === 1
                        ? <div className='content-info-item'>{cardInfo.surname}</div>
                        : <div ref={dropSurname} className={isOverSurname ? "content-info-item-blank-over" : "content-info-item-blank"}></div>
                    }
                    <strong>Edad:</strong>
                    <div ref={dropAge} className={isOverAge ? "content-info-item-blank-over" : "content-info-item-blank"}></div>
                    <strong>Nacionalidad:</strong>
                    <div ref={dropNationality} className={isOverNationality ? "content-info-item-blank-over" : "content-info-item-blank"}></div>
                </div>
            </div>
        </div>
    )
}

export default Card;