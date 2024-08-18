import ENDPOINTS from "./endpoints";

export const getFotosIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_FOTOS_INDEX);
    return response.json();
}

export const getFotosShow = async (fotoId) => {
    const response = await fetch(ENDPOINTS.GET_FOTOS_SHOW(fotoId));
    return response.json();
}

export const postFotosStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_FOTOS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putFotosUpdate = async (fotoId, data) => {
    const response = await fetch(ENDPOINTS.PUT_FOTOS_UPDATE(fotoId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteFotosDelete = async (fotoId) => {
    const response = await fetch(ENDPOINTS.DELETE_FOTOS_DELETE(fotoId), {
        method: 'DELETE'
    });
    return response.json();
}