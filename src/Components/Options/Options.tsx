/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDrag } from 'react-dnd';
import './Options.styles.css'
import { useSelector } from 'react-redux';

interface OptionsProps {
    cardInfo: {
        forename: string;
        surname: string;
        nationality: string;
        age: number;
        picture: string;
        color: string;
    },
    onRandomColor: (key: string) => string;
}

interface DraggableOptionProps {
    option: { id: string, content: string | number };
    onRandomColor: () => string;
}

const DraggableOption = ({ option, onRandomColor }: DraggableOptionProps): JSX.Element => {
        
    const {type, content} = option
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'option',
        item: {id: type},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    const draggableStyle = {
        backgroundColor: onRandomColor(),
    };

    return (
        <div
            ref={drag}
            style={draggableStyle}
            className={isDragging ? "dragging-option" : "option"}
        >
            {option.content}
        </div>
    );
}

function Options({interactiveData, onRandomColor}: OptionsProps): JSX.Element {
    
    const level = useSelector((state) => state.level)
    
    // const colors = {
    //     age: onRandomColor(),
    //     nationality: onRandomColor(),
    // };

    return (
        <div className="options-container">
            <h1 className='options-title'>Opciones</h1>
            {(level === 1)
            ? interactiveData.slice(0,2).map((option) => 
                (<DraggableOption key={option.type} option={option} onRandomColor={onRandomColor}/>))
            : interactiveData.map((option) => 
                (<DraggableOption key={option.type} option={option} onRandomColor={onRandomColor}/>)
            )}
        </div>
    )
}

export default Options;