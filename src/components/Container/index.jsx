import ContainerStyle from '../../style/container.module.css'

export default function Container({children}){
    return(
        <div className={ContainerStyle.container}>
            {children}
        </div>
    );
}