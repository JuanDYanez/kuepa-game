/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDroppable } from '@dnd-kit/core';

import './Card.styles.css'

interface OptionsProps {
    data: {
        forename: string;
        surname: string;
        nationality: string;
        age: number;
        picture: string;
        color: string;
    }
}

function Card({data}: OptionsProps): JSX.Element {

    const {setNodeRef: ageDroppable, isOver: isOverAge} = useDroppable({
        id: 'ageDroppable',
        data: {
            type: 'ageDroppable'
        }
    })
    const {setNodeRef: nationalityDroppable} = useDroppable({
        id: 'nationalityDroppable',
        data: {
            type: 'nationalityDroppable'
        }
    })
    
    // 
    


    return (
        <div className="card-container">
            <div className="header">
                <h1 className='header-title'>Tarjeta de Identidad</h1>
                <img className='header-image' src="RD-Flag-02.svg" alt="Bandera de República Dominicana"/>
            </div>
            <div className="content">
                <div className="content-picture">
                    <img src={data.picture} alt="Foto del titular"/>
                </div>
                <div className="content-info">
                    <strong>Nombres:</strong>
                    <div className='content-info-item'>{data.forename}</div>
                    <strong>Apellidos:</strong>
                    <div className='content-info-item'>{data.surname}</div>
                    <strong>Edad:</strong>
                    <div ref={ageDroppable} className='content-info-item'>{isOverAge && data.age}</div>
                    <strong>Nacionalidad:</strong>
                    <div ref={nationalityDroppable} className='content-info-item'>{data.nationality}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;