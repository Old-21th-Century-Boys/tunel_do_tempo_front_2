import ENDPOINTS from "./endpoints";

export const getVideosIndex = async () => {
    const response = await fetch(ENDPOINTS.GET_VIDEOS_INDEX);
    return response.json();
}

export const getVideosShow = async (videoId) => {
    const response = await fetch(ENDPOINTS.GET_VIDEOS_SHOW(videoId));
    return response.json();
}

export const postVideosStore = async (data) => {
    const response = await fetch(ENDPOINTS.POST_VIDEOS_STORE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const putVideosUpdate = async (videoId, data) => {
    const response = await fetch(ENDPOINTS.PUT_VIDEOS_UPDATE(videoId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const deleteVideosDelete = async (videoId) => {
    const response = await fetch(ENDPOINTS.DELETE_VIDEOS_DELETE(videoId), {
        method: 'DELETE'
    });
    return response.json();
}

export const getVideosIndexByMembroId = async (membroId) => {
    const response = await fetch(`${ENDPOINTS.GET_VIDEOS_INDEX}/membro/${membroId}`);
    return response.json
}