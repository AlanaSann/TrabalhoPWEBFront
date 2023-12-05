import axios, { AxiosPromise } from "axios"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { ConsultaForm } from "../../../interface/ConsultaForm";


const API_URL = 'http://localhost:8084';

const postData = async (data: ConsultaForm): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/consulta/agendar', data);
    return response;
}
export function useConsultaDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['consulta-data'])
        }
    })

    return mutate;
}
