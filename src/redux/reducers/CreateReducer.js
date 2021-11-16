const initialState = [{nome: 'Patrick', telefone: '41 3412-3123', email: 'patrick.tads@hotmail.com'}]

const CreateReducer = (state = [], action) => {
    switch (action.type) {
        case 'updateUser':
            return [...state, action.payload]
        default:
            console.log("[Log]: Ação Padrão");
            return initialState
    }
}

export default CreateReducer