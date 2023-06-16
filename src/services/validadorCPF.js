import axios from "axios";

export const verificadorCPF = (cpf) => {
    let url = `https://api.4devs.com.br/valida_cpf?cpf=${cpf}`;
    axios.get(url)
    .then(response => {
        const data = response.data;
        if (data.status === "VALID") {
            console.log('CPF válido')
            return true;
        } else {
            console.log('CPF inválido')
            return false;
        }
    })
    .catch(error => {
        console.error('Erro ao validar CPF:', error);
        return false;
    });
}