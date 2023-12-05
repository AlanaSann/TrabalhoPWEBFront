import axios, { AxiosPromise } from "axios"
import { PacienteData } from "../../../interface/PacienteData";
import { useMutation,useQueryClient } from "@tanstack/react-query";


const API_URL = 'http://localhost:8086';

const deleteData = async (cpf: string): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/pacientes/deletar/' + cpf);
    return response;
}
export function usePacienteDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries(['paciente-data'])
        }
    })

    return mutate;
}
