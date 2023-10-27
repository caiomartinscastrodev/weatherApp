export default function Form({children , handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
}