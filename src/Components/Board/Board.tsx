/* eslint-disable @typescript-eslint/no-explicit-any */

import {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Options from '../Options/Options'
import data from '../../utils/data.json'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setInteractiveData, setLevel, updateInteractiveData} from '../../redux/actions'
import swal from 'sweetalert'

import './Board.styles.css'

function Board(): JSX.Element {

    const dispatch = useDispatch()

    const level = useSelector((state: {level: number}) => state.level)
    const interactiveDataCardInfo = useSelector((state: {interactiveData: {cardInfo: any[]}}) => state.interactiveData?.cardInfo || [])

    interface Data {
        forename: string,
        surname: string,
        nationality: string,
        age: number,
        picture: string,
        color: string
        [key: string]: string | number;
        }   

    const [randomData, setRandomData] = useState<Data>({
        forename: '',
        surname: '',
        age: 0,
        nationality: '',
        picture: '',
        color: ''
    })

    const getRandomColor = (): string => {
        const indexColor = Math.floor(Math.random() * 1000) % data.color.length
        return data.color[indexColor]
    }

    const generateRandomOptions = (): void => {
        const newIndexNamePictureNationality = Math.floor(Math.random() * data.forenameAndNationality.length)
        const newIndexSurname = Math.floor(Math.random() * data.surname.length)
        const newIndexAge = Math.floor(Math.random() * data.age.length)
        const newIndexColor = Math.floor(Math.random() * data.color.length)

        const dataArrays = {
            cardInfo: [
    
            ],
            options: [
                { type: 'age', content: data.age[newIndexAge] },
                { type: 'nationality', content: data.forenameAndNationality[newIndexNamePictureNationality].nationality },
                { type: 'surname', content: data.surname[newIndexSurname] },
            ]
        }
        
        setRandomData({
            forename: data.forenameAndNationality[newIndexNamePictureNationality].name,
            surname: data.surname[newIndexSurname],
            nationality: data.forenameAndNationality[newIndexNamePictureNationality].nationality,
            picture: data.forenameAndNationality[newIndexNamePictureNationality].picture,
            age: data.age[newIndexAge],
            color: data.color[newIndexColor],
        })

        dispatch(setInteractiveData(dataArrays))
    }

    useEffect(() => {
        generateRandomOptions();
    }, []); 
    
    const handleSubmit = (type: string, section: string) => {     
        if (type === section) {
            if (level === 1) {
                console.log('Validate button');
                
                swal({
                    title: "¡Bien hecho!",
                    text: "Avanza al siguiente nivel",
                    icon: "success",
                  });
            }   
        }   
        dispatch(updateInteractiveData(type))
        console.log(`dropped from ${type} to ${section}`);
        generateRandomOptions()
        dispatch(setLevel())
    }

    return (
    <DndProvider backend={HTML5Backend}>
        <div className="board-container">
            {level === 1
            ? <h1>Nivel 1</h1>
            : <h1>Nivel 2</h1>
            }
            <div className='board-content'>
                <Card cardInfo={randomData} onSubmitButton={handleSubmit}/>
                <Options randomOptions={generateRandomOptions} onSubmitButton={handleSubmit} onRandomColor={getRandomColor}/>
            </div>
            {((level === 1 && interactiveDataCardInfo.length >= 2) || (level > 1 && interactiveDataCardInfo.length >= 3))
            ? <button className='content-button' onClick={() => handleSubmit('type', 'section')}>Revisar respuestas</button>
            : null
            }
        </div>
    </DndProvider>
    )
}

export default Board;