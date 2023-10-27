import InputStyle from '../../style/input.module.css'

export default function Input({type , name , id , handleChange}){
    return(
        <>
            <input onChange={handleChange} className={InputStyle.inputsearch} type={type} name={name} id={id} placeholder="Ex: NewYork, Los Angeles..." />
        </>
    );
}