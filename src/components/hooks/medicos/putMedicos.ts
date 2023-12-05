import axios, { AxiosPromise } from "axios"
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { MedicoData } from "../../../interface/MedicoData";


const API_URL = 'http://localhost:8083';

export interface medicoProps {
    crm:string
    medicoData:MedicoData
    }

const editData = async ({crm, medicoData}: medicoProps ): AxiosPromise<any> => {
    console.log(crm)
    console.log(medicoData)
    const response = axios.put(API_URL + '/medicos/atualizar/' + crm, medicoData);
    
    return response;
}
export function useMedicoEdit(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: editData,
        
        retry: 1,
        onSuccess: () => {
            queryClient.invalidateQueries(['medico-data'])
        }
    })

    return mutate;
}
