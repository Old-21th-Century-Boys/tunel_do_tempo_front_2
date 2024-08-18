const BASE_URL = "http://127.0.0.1:8000/api";

const ENDPOINTS = {

    GET_MEMBROS_INDEX: `${BASE_URL}/membros`,
    GET_MEMBROS_SHOW: (userId) => `${BASE_URL}/membros/${userId}`,
    POST_MEMBROS_STORE: `${BASE_URL}/membros`,
    PUT_MEMBROS_UPDATE: (userId) => `${BASE_URL}/membros/${userId}`,
    DELETE_MEMBROS_DELETE: (userId) => `${BASE_URL}/membros/${userId}`,

    GET_VIDEOS_INDEX: `${BASE_URL}/videos`,
    GET_VIDEOS_SHOW: (videoId) => `${BASE_URL}/videos/${videoId}`,
    POST_VIDEOS_STORE: `${BASE_URL}/videos`,
    PUT_VIDEOS_UPDATE: (videoId) => `${BASE_URL}/videos/${videoId}`,
    DELETE_VIDEOS_DELETE: (videoId) => `${BASE_URL}/videos/${videoId}`,

    GET_FOTOS_INDEX: `${BASE_URL}/fotos`,
    GET_FOTOS_SHOW: (fotoId) => `${BASE_URL}/fotos/${fotoId}`,
    POST_FOTOS_STORE: `${BASE_URL}/fotos`,
    PUT_FOTOS_UPDATE: (fotoId) => `${BASE_URL}/fotos/${fotoId}`,
    DELETE_FOTOS_DELETE: (fotoId) => `${BASE_URL}/fotos/${fotoId}`,

    GET_HISTORIAS_INDEX: `${BASE_URL}/historias`,
    GET_HISTORIAS_SHOW: (historiaId) => `${BASE_URL}/historias/${historiaId}`,
    POST_HISTORIAS_STORE: `${BASE_URL}/historias`,
    PUT_HISTORIAS_UPDATE: (historiaId) => `${BASE_URL}/historias/${historiaId}`,
    DELETE_HISTORIAS_DELETE: (historiaId) => `${BASE_URL}/historias/${historiaId}`,

    GET_HISTORIASPARALELAS_INDEX: `${BASE_URL}/historiasParalelas`,
    GET_HISTORIASPARALELAS_SHOW: (historiaParalelaId) => `${BASE_URL}/historiasParalelas/${historiaParalelaId}`,
    POST_HISTORIASPARALELAS_STORE: `${BASE_URL}/historiasParalelas`,
    PUT_HISTORIASPARALELAS_UPDATE: (historiaParalelaId) => `${BASE_URL}/historiasParalelas/${historiaParalelaId}`,
    DELETE_HISTORIASPARALELAS_DELETE: (historiaParalelaId) => `${BASE_URL}/historiasParalelas/${historiaParalelaId}`,

    GET_REFERENCIAS_INDEX: `${BASE_URL}/referencias`,
    GET_REFERENCIAS_SHOW: (referenciaId) => `${BASE_URL}/referencias/${referenciaId}`,
    POST_REFERENCIAS_STORE: `${BASE_URL}/referencias`,
    PUT_REFERENCIAS_UPDATE: (referenciaId) => `${BASE_URL}/referencias/${referenciaId}`,
    DELETE_REFERENCIAS_DELETE: (referenciaId) => `${BASE_URL}/referencias/${referenciaId}`,

    GET_USUARIOS_INDEX: `${BASE_URL}/usuarios`,
    GET_USUARIOS_SHOW: (usuarioId) => `${BASE_URL}/usuarios/${usuarioId}`,
    POST_USUARIOS_STORE: `${BASE_URL}/usuarios`,
    PUT_USUARIOS_UPDATE: (usuarioId) => `${BASE_URL}/usuarios/${usuarioId}`,
    DELETE_USUARIOS_DELETE: (usuarioId) => `${BASE_URL}/usuarios/${usuarioId}`,
    POST_LOGIN: `${BASE_URL}/usuarios/login`
};

export default ENDPOINTS;
