import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import { ConsultaData } from "../../../interface/ConsultaData";

const API_URL = 'http://localhost:8084';

const fetchData = async (): AxiosPromise<ConsultaData[]> => {
    const response = axios.get(API_URL + '/consulta/listar/0')
    console.log("test" + response);
    console.log(Object.keys((await response).data));
    console.log(Object.keys((await response).data));
    console.log((await response).data.content);
    
    return (await response).data.content;
}
export function useConsultaData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['consulta-data'],
        retry: 2
    })
console.log(query.data)

    return{
        ...query,
        data: query.data
    }
}
