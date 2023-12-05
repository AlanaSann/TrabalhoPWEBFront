import axios, { AxiosPromise } from "axios"
import { PacienteData } from "../../../interface/PacienteData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8086';

const fetchData = async (): AxiosPromise<PacienteData[]> => {
    const response = axios.get(API_URL + '/pacientes/listar/0')
    console.log("test" + response);
    console.log(Object.keys((await response).data));
    console.log(Object.keys((await response).data));
    console.log((await response).data.content);
    
    return (await response).data.content;
}
export function usePacienteData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['paciente-data'],
        retry: 2
    })
console.log(query.data)

    return{
        ...query,
        data: query.data
    }
}
