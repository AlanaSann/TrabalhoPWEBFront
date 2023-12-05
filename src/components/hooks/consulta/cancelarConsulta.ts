import axios, { AxiosPromise } from "axios"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { ConsultaCancelamento } from "../../../interface/ConsultaCancelamento";


const API_URL = 'http://localhost:8084';

const deleteData = async (consultaCanc : ConsultaCancelamento): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/consulta/cancelar', { data: { consultaCanc } });
    return response;
}
export function useConsultaCancelar(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries(['consulta-data'])
        }
    })

    return mutate;
}
