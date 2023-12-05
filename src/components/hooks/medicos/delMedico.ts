import axios, { AxiosPromise } from "axios"
import { useMutation,useQueryClient } from "@tanstack/react-query";


const API_URL = 'http://localhost:8083';

const deleteData = async (crm: string): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/medicos/deletar/' + crm);
    return response;
}
export function useMedicoDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries(['medico-data'])
        }
    })

    return mutate;
}
