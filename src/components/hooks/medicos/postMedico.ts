import axios, { AxiosPromise } from "axios"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { MedicoData } from "../../../interface/MedicoData";


const API_URL = 'http://localhost:8083';

const postData = async (data: MedicoData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/medicos/cadastrar', data);
    return response;
}
export function useMedicoDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['medico-data'])
        }
    })

    return mutate;
}
