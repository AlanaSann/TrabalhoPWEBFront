import axios, { AxiosPromise } from "axios"
import { PacienteData } from "../../interface/PacienteData";
import { useMutation,useQueryClient } from "@tanstack/react-query";


const API_URL = 'http://localhost:8086';

export interface editProps {
    cpf:string
    pacienteData:PacienteData
    }

const editData = async ({cpf, pacienteData}: editProps ): AxiosPromise<any> => {
    console.log(cpf)
    console.log(pacienteData)
    const response = axios.put(API_URL + '/pacientes/atualizar/' + cpf, pacienteData);
    
    return response;
}
export function usePacienteEdit(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: editData,
        
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries(['paciente-data'])
        }
    })

    return mutate;
}
