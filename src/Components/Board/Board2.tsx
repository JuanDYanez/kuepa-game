import {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Options from '../Options/Options'
import data from '../../utils/data.json'
import {DndContext } from '@dnd-kit/core'

import './Board.styles.css'

function Board2(): JSX.Element {

    interface Data {
        forename: string,
        surname: string,
        nationality: string,
        age: number,
        picture: string,
        color: string
        }   

    const [randomData, setRandomData] = useState<Data>({
        forename: '',
        surname: '',
        age: 0,
        nationality: '',
        picture: '',
        color: ''
    })

    // type DNDType = {
    //     id:UniqueIdentifier;
    //     title: string;
    //     items: {
    //         id: UniqueIdentifier,
    //         title: string,
    //     }
    // }
    // const [containers, setContainers] = useState<DNDType[]>([])
    // const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
    // const [currentContainerId, setCurrentContainerId] = useState<UniqueIdentifier>()
    // const [containerName, setContainerName] = useState('')
    // const [itemName, setItemName] = useState('')
    // const [showAddContainerModal, setShowAddContainerModal] = useState(false)
    // const [showAddItemModal, setShowAddItemModal] = useState(false)

    // const sensors = useSensors(
    //     useSensor(PointerSensor),
    //     useSensor(KeyboardSensor), {
    //         coordinateGetter: sortableKeyboardCoordinates,
    //     }
    // )


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

    // const findValueOfItems = (id: UniqueIdentifier | undefined, type: string) => {
    //     if (type === 'container') {
    //         return containers.find((container) => container.id === id)
    //     }
    //     if (type === 'item') {
    //         return containers.find((container) => container.items.find((item) => item.id === id),
    //         );
    //     }
    // };

    // const handleDragStart = (event:DragStartEvent) => {
    //     const {active} = event
    //     const {id} = active
    //     setActiveId(id)
    // }

    // const handleDragMove = (event:DragMoveEvent) => {
    //     const {active, over} = event

    //     if(active.id.toString().includes('item') && over?.id.toString().includes('item') && active && over && active.id !== over.id) {
    //         const activeContainer = findValueOfItems(active.id, 'item')
    //         const overContainer = findValueOfItems(over.id, 'item')
            
    //         if(!activeContainer || !overContainer) return

    //         const activeContainerIndex = containers.findIndex(
    //             (container) => container.id === activeContainer.id
    //         )

    //         const overContainerIndex = containers.findIndex(
    //             (container) => container.id === overContainer.id
    //         )

    //         const activeItemIndex = activeContainer.items.findIndex(
    //             (item) => item.id === active.id                
    //         )

    //         const overItemIndex = overContainer.items.findIndex(
    //             (item) => item.id === over.id                
    //         )

    //         if(activeContainerIndex === overContainerIndex) {
    //             let newItems = [...containers]
    //             newItems[activeContainerIndex].items = arrayMove(
    //                 newItems[activeContainerIndex].items,
    //                 activeItemIndex,
    //                 overItemIndex
    //             )
                
    //             setContainers(newItems)
    //         } else {
    //             let newItems = [...containers]
    //         }
    //     }

    // }

    // const handleDragEnd = (event:DragEndEvent) => {

    // }



    // const handleDragOver(event: DragOverEvent) {
    //     const {active, over} = event

    //     if (!over) return
    
    //     const activeId = active.id;
    //     const overId = over.id;

    //     if(activeId === overId) return

    // }

    return (
    <DndContext>
        <div className="board-container">
            <h1>Nivel 2</h1>
            <div className='board-content'>
                <Card data={randomData}/>
                <Options data={randomData} onRandomColor={getRandomColor}/>
            </div>
            <button className='content-button'>Siguiente</button>
        </div>
    </DndContext>
    )
}

export default Board2;