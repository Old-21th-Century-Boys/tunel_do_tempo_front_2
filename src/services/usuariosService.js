import ENDPOINTS from "./endpoints";

export const getUsuariosIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_USUARIOS_INDEX);
    return response.json();
}

export const getUsuariosShow = async (usuarioId) => {
    const response = await fetch(ENDPOINTS.GET_USUARIOS_SHOW(usuarioId));
    return response.json();
}

export const postUsuariosStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_USUARIOS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putUsuariosUpdate = async (usuarioId, data) => {
    const response = await fetch(ENDPOINTS.PUT_USUARIOS_UPDATE(usuarioId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteUsuariosDelete = async (usuarioId) => {
    const response = await fetch(ENDPOINTS.DELETE_USUARIOS_DELETE(usuarioId), {
        method: 'DELETE'
    });
    return response.json();
}

// Função para realizar login
export const postLogin = async (email, senha) => {
    const response = await fetch(ENDPOINTS.POST_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });
    return response.json();
}
