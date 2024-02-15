
import {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Options from '../Options/Options'
import data from '../../utils/data.json'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {setLevel} from '../../redux/actions'

import './Board.styles.css'

function Board(): JSX.Element {

    const dispatch = useDispatch()

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

    const level = useSelector((state) => state.level)
    
    useEffect(() => {
        generateRandomOptions()
    }, [])

    const handleSubmit = () => {
        if (level === 1) {
            dispatch(setLevel())
        }
    }

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

    const interactiveData = [
        { type: 'age', content: randomData.age },
        { type: 'nationality', content: randomData.nationality },
        { type: 'surname', content: randomData.surname },
    ]
    
    return (
    <DndProvider backend={HTML5Backend}>
        <div className="board-container">
            {level === 1
            ? <h1>Nivel 1</h1>
            : <h1>Nivel 2</h1>
            }
            <div className='board-content'>
                <Card cardInfo={randomData} level={level} interactiveData={interactiveData}/>
                <Options cardInfo={randomData} onRandomColor={getRandomColor} level={level} interactiveData={interactiveData}/>
            </div>
                <button className='content-button' onClick={handleSubmit}>Revisar respuestas</button>
        </div>
    </DndProvider>
    )
}

export default Board;