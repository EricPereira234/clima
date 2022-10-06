import React,{useEffect, useState} from "react";
import api from "../../services/api";
import { IoMdSync } from "react-icons/io";


export default function Home() {
    const [previsao, setPrevisao] = useState(false);
    const [local, setLocal] = useState(false);

    let getPrevisao = async (lat, long) => {
        let res = await api.get("data/2.5/weather", {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OW_KEY,
                lang: "pt",
                units: "metric"
            }
        });
        setPrevisao(res.data);
        console.log(res.data);
    }

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((coordenada) => {

            getPrevisao(coordenada.coords.latitude, coordenada.coords.longitude)
 
            setLocal(true);
        })
    }, []); //2ºparam informa que só vai executar quando for montado

    if(local === false){

        return(
        <div className="card-box">
          <h1>Por favor habilidade a localização</h1>
    
    
        </div>
        );
    
      }else if(previsao === false){
        return(
    
          <div className="container">
    
          <h1>Carregando Clima</h1>
    
        </div>
        )
      }else{
        return (
          <>
          <a className="link" href="/home" ><IoMdSync/></a>
            <div className="container">

              <h1>{previsao['name']} - {previsao['main']['temp']}ºc</h1>

              <h2>{previsao['weather'][0]['description']} - umidade {previsao['main']['humidity']}%</h2>

              <p>Max {previsao['main']['temp_max']}ºc / Min {previsao['main']['temp_min']}ºc</p>

            </div>
          </>
        )
      }
}