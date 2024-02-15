/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import './Card.styles.css'
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {updateInteractiveData} from '../../redux/actions'

interface OptionsProps {
    cardInfo: {
        forename: string;
        surname: string;
        picture: string;
        color: string;
    },
    onSubmitButton: (type: string, section: string) => void;
}

interface DraggedItem {
    id: string;
}

function Card({cardInfo}: OptionsProps): JSX.Element {
    
    const dispatch = useDispatch()

    const level = useSelector((state: { level: number}) => state.level)
    const interactiveData = useSelector((state: {interactiveData: {cardInfo: any[]}}) => state.interactiveData?.cardInfo || []) 

    
    const [{ isOver: isOverAge }, dropAge] = useDrop(() => ({
        accept: 'option',
        drop: (item: DraggedItem) => addItemToSection(item.id, 'age'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const [{ isOver: isOverNationality }, dropNationality] = useDrop(() => ({
        accept: 'option',
        drop: (item: DraggedItem) => addItemToSection(item.id, 'nationality'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      const [{ isOver: isOverSurname }, dropSurname] = useDrop(() => ({
        accept: 'option',
        drop: (item: DraggedItem) => addItemToSection(item.id, 'surname'),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))
    

    const addItemToSection = (type: string, section: string) => {
        dispatch(updateInteractiveData(type))
        console.log(`dropped from ${type} to ${section}`);

        console.log(type === section);
        
    }

    // const handleValidateAnswers = (type: string, section: string) => {
    //     dispatch(validateAnswers(type, section))
    //     onSubmitButton(type, section)
    //     console.log(`dropped from ${type} to ${section}`);
    // }


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
                    <div className='content-info-item-blank'>{cardInfo.forename}</div>
                    <strong>Apellidos:</strong>
                    {level === 1
                        ? <div className='content-info-item-blank'>{cardInfo.surname}</div>
                        : <div ref={dropSurname} className={isOverSurname ? "content-info-item-blank-over" : "content-info-item-blank"}>{interactiveData.find((option) => option.type === 'surname')?.content}</div>
                    }
                    <strong>Edad:</strong>
                    <div ref={dropAge} className={isOverAge ? "content-info-item-blank-over" : "content-info-item-blank"}>{interactiveData.find((option) => option.type === 'age')?.content}</div>
                    <strong>Nacionalidad:</strong>
                    <div ref={dropNationality} className={isOverNationality ? "content-info-item-blank-over" : "content-info-item-blank"}>{interactiveData.find((option) => option.type === 'nationality')?.content}</div>
                </div>
            </div>
        </div>
    )
}

export default Card;