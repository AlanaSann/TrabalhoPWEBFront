import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import { MedicoData } from "../../../interface/MedicoData";

const API_URL = 'http://localhost:8083';

const fetchData = async (): AxiosPromise<MedicoData[]> => {
    const response = axios.get(API_URL + '/medicos/listar/0')
    console.log("test" + response);
    console.log(Object.keys((await response).data));
    console.log(Object.keys((await response).data));
    console.log((await response).data.content);
    
    return (await response).data.content;
}
export function useMedicoData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['medico-data'],
        retry: 2
    })
console.log(query.data)

    return{
        ...query,
        data: query.data
    }
}
