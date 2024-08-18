import ENDPOINTS from "./endpoints";

export const getReferenciasIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_REFERENCIAS_INDEX);
    return response.json();
}

export const getReferenciasShow = async (referenciaId) => {
    const response = await fetch(ENDPOINTS.GET_REFERENCIAS_SHOW(referenciaId));
    return response.json();
}

export const postReferenciasStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_REFERENCIAS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putReferenciasUpdate = async (referenciaId, data) => {
    const response = await fetch(ENDPOINTS.PUT_REFERENCIAS_UPDATE(referenciaId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteReferenciasDelete = async (referenciaId) => {
    const response = await fetch(ENDPOINTS.DELETE_REFERENCIAS_DELETE(referenciaId), {
        method: 'DELETE'
    });
    return response.json();
}
