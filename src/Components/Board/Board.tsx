
import {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Options from '../Options/Options'
import data from '../../utils/data.json'
import {DndContext } from '@dnd-kit/core'

import './Board.styles.css'

function Board(): JSX.Element {

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

    useEffect(() => {
        generateRandomOptions()
    }, [])

    const getRandomColor = (): string => {
        const indexColor = Math.floor(Math.random() * 1000) % data.color.length
        return data.color[indexColor]
    }

    const generateRandomOptions = (): void => {
        const newIndexNamePictureNationality = Math.floor(Math.random() * data.forenameAndNationality.length)
        const newIndexSurname = Math.floor(Math.random() * data.surname.length)
        const newIndexAge = Math.floor(Math.random() * data.age.length)
        const newIndexColor = Math.floor(Math.random() * data.color.length)

        setRandomData({
            forename: data.forenameAndNationality[newIndexNamePictureNationality].name,
            surname: data.surname[newIndexSurname],
            nationality: data.forenameAndNationality[newIndexNamePictureNationality].nationality,
            picture: data.forenameAndNationality[newIndexNamePictureNationality].picture,
            age: data.age[newIndexAge],
            color: data.color[newIndexColor],
        })
    }


    return (
    <DndContext>
        <div className="board-container">
            <h1>Nivel 1</h1>
            <div className='board-content'>
                <Card data={randomData}/>
                <Options data={randomData} onRandomColor={getRandomColor}/>
            </div>
                <button className='content-button'>Siguiente</button>
        </div>
    </DndContext>
    )
}

export default Board;