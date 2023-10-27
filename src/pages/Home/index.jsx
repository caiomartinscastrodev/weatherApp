import { useState } from "react";
import axios from "axios";

//components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Container from "../../components/Container";
import Form from "../../components/Form";

//styles 
import RowStyle from '../../style/Row.module.css';
import DataStyle from '../../style/Data.module.css'

export default function Home(){

    const [city , setCity] = useState('');
    const [name , setName] = useState('');
    const [weather , setWeather] = useState([]);
    const [url , setUrl] = useState('');
    const [temp , setTemp] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=efae9c50a8ed295856d83ce67dcee6ee`)
          .then((res) => {
            setName(res.data.name);
            setWeather(res.data.weather);
            const iconUrl = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`;
            setUrl(iconUrl);
            setTemp(Math.round(res.data.main.temp - 273.15));
          })
          .catch((error) => {
            console.error('Erro na solicitação:', error);
          });
      };
      

    const showData = () => {
        try{
            return(
                <div>
                    <img className={DataStyle.img} src={url} alt="img" />
                    <h3 className={DataStyle.data}>{name}</h3>
                    <h3 className={DataStyle.data}>{temp}°C</h3>
                    <h3 className={DataStyle.data}>{weather[0].main}</h3>
                    <h3 className={DataStyle.data}>{weather[0].description}</h3>
                </div>
            )
        }catch(ERR){
            console.log(ERR)
        }
    }

    const handleChange = (e) => {
        setCity(e.target.value);
        console.log(city);
    }

    return(
        <Container>
            <Form 
                handleSubmit={handleSubmit}
            >
                <Input
                    name={'search'}
                    id={'search'}
                    type={'text'}
                    handleChange={handleChange}
                />
                <div className={RowStyle.row}>
                    <Button
                        type={'submit'}
                        text={'Procurar'}
                    />
                    <Button
                        type={'reset'}
                        text={'Limpar'}
                    />
                </div>
            </Form>
            {showData()}
        </Container>
    );
}
