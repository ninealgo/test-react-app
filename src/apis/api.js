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