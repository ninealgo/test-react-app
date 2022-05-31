import * as endpoint from "./endpoints";
import Http from "../services/http";
import { httpVerbs } from "../constants";

export const userListApi = () => {
    return Http({
        method: httpVerbs.GET,
        url: endpoint.userListUrl
    });
}

export const userAddApi = (payload) => {
    return Http({
        method: httpVerbs.POST,
        url: endpoint.userListUrl,
        payload
    });
}

export const userDeleteApi = (userId) => {
    return Http({
        method: httpVerbs.DELETE,
        url: `${endpoint.userListUrl}/${userId}`
    });
}

export const getSingleUserById = (userId) => {
    return Http({
        method: httpVerbs.GET,
        url: `${endpoint.userListUrl}/${userId}`
    });
}

export const userUpdateApi = (userId, payload) => {
    return Http({
        method: httpVerbs.PUT,
        url: `${endpoint.userListUrl}/${userId}`,
        payload
    });
}

export const userUpdatePatchApi = (userId, payload) => {
    return Http({
        method: httpVerbs.PATCH,
        url: `${endpoint.userListUrl}/${userId}`,
        payload
    });
}