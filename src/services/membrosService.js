import ENDPOINTS from "./endpoints";

export const getMembrosIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_MEMBROS_INDEX);
    return response.json();
}

export const getMembrosShow = async (userId) => {
    const response = await fetch(ENDPOINTS.GET_MEMBROS_SHOW(userId));
    return response.json();
}

export const postMembrosStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_MEMBROS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putMembrosUpdate = async (userId, data) => {
    const response = await fetch(ENDPOINTS.PUT_MEMBROS_UPDATE(userId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteMembrosDelete = async (userId) => {
    const response = await fetch(ENDPOINTS.DELETE_MEMBROS_DELETE(userId), {
        method: 'DELETE'
    });
    return response.json();
}
