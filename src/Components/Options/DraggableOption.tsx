import { useDrag } from 'react-dnd';

interface DraggableOptionProps {
    option: { id: string, content: string | number, type: string };
    onRandomColor: () => string;
}

const DraggableOption = ({ option, onRandomColor }: DraggableOptionProps): JSX.Element => {
        
    const {type} = option
    
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

export default DraggableOption;