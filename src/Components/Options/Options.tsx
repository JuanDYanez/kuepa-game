/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import './Options.styles.css'

interface OptionsProps {
    data: {
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
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: option.id,
    });


    const draggableStyle = {
        transform: CSS.Translate.toString(transform),
        backgroundColor: String(onRandomColor()),
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={draggableStyle}
            className="option"
        >
            {option.content}
        </div>
    );
}

function Options({data, onRandomColor}: OptionsProps): JSX.Element {
    
    const options = [
        { id: 'age', content: data.age },
        { id: 'nationality', content: data.nationality },
    ]

    // const colors = {
    //     age: onRandomColor(),
    //     nationality: onRandomColor(),
    // };

    return (
        <div className="options-container">
            <h1 className='options-title'>Opciones</h1>
            {options.map(option => (
                <DraggableOption key={option.id} option={option} onRandomColor={() => onRandomColor(option.id)}/>
            ))}
        </div>
    )
}

export default Options;