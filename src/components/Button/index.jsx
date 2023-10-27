import ButtonStyle from '../../style/Button.module.css';

export default function Button({type , text}){
    return(
        <>
            <button className={ButtonStyle.buttonform} type={type}>
                {text}
            </button>
        </>
    );
}