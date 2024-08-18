import ENDPOINTS from "./endpoints";

export const getHistoriasIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_HISTORIAS_INDEX);
    return response.json();
}

export const getHistoriasShow = async (historiaId) => {
    const response = await fetch(ENDPOINTS.GET_HISTORIAS_SHOW(historiaId));
    return response.json();
}

export const postHistoriasStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_HISTORIAS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putHistoriasUpdate = async (historiaId, data) => {
    const response = await fetch(ENDPOINTS.PUT_HISTORIAS_UPDATE(historiaId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteHistoriasDelete = async (historiaId) => {
    const response = await fetch(ENDPOINTS.DELETE_HISTORIAS_DELETE(historiaId), {
        method: 'DELETE'
    });
    return response.json();
}

