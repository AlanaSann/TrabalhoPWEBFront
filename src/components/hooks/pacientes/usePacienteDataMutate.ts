import axios, { AxiosPromise } from "axios"
import { PacienteData } from "../../../interface/PacienteData";
import { useMutation,useQueryClient } from "@tanstack/react-query";


const API_URL = 'http://localhost:8086';

const postData = async (data: PacienteData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/pacientes/cadastrar', data);
    return response;
}
export function usePacienteDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['paciente-data'])
        }
    })

    return mutate;
}
