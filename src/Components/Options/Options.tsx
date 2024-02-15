/* eslint-disable @typescript-eslint/no-explicit-any */
import './Options.styles.css'
import DraggableOption from './DraggableOption';
import { useSelector } from 'react-redux';

interface OptionsProps {
    onRandomColor: () => string;
    randomOptions: (key: object) => void;
    onSubmitButton: (type: string, section: string) => void;
}

function Options({onRandomColor}: OptionsProps): JSX.Element {

    const level = useSelector((state: {level: number}) => state.level)
    const interactiveData = useSelector((state: {interactiveData?: {options: any[]}}) => state.interactiveData?.options || [])

    // const handleSubmit = () => {
    //     if (answersValidation) {
    //         if (level === 1) {
    //             console.log('Validate button');
                
    //             swal({
    //                 title: "¡Bien hecho!",
    //                 text: "Avanza al siguiente nivel",
    //                 icon: "success",
    //                 button: "Avanzar",
    //               });
    //         }   
    //     }
    //     randomOptions()
    //     dispatch(setLevel())
    // }

    return (
        <div className="options-container">
            <h1 className='options-title'>Opciones</h1>
            {(level === 1)
            ? interactiveData.filter((option) => option.type === 'age' || option.type === 'nationality').map((option: any) => 
                (<DraggableOption key={option.type} option={option} onRandomColor={onRandomColor}/>))
            : interactiveData.map((option: any) => 
                (<DraggableOption key={option.type} option={option} onRandomColor={onRandomColor}/>)
            )}
        </div>
    )
}

export default Options;