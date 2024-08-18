import ENDPOINTS from "./endpoints";

export const getHistoriasParalelasIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_HISTORIASPARALELAS_INDEX);
    return response.json();
}

export const getHistoriasParalelasShow = async (historiaParalelaId) => {
    const response = await fetch(ENDPOINTS.GET_HISTORIASPARALELAS_SHOW(historiaParalelaId));
    return response.json();
}

export const postHistoriasParalelasStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_HISTORIASPARALELAS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putHistoriasParalelasUpdate = async (historiaParalelaId, data) => {
    const response = await fetch(ENDPOINTS.PUT_HISTORIASPARALELAS_UPDATE(historiaParalelaId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteHistoriasParalelasDelete = async (historiaParalelaId) => {
    const response = await fetch(ENDPOINTS.DELETE_HISTORIASPARALELAS_DELETE(historiaParalelaId), {
        method: 'DELETE'
    });
    return response.json();
}
