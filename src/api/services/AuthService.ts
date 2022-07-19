import $api from "../http";
import {AxiosResponse} from "axios";
import {ITokens} from "../../types/ITokens";


export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<ITokens>> {
        return $api.post('/auth/login', {username, password})
    }
    static async registration(username: string, password: string): Promise<AxiosResponse<ITokens>> {
        return $api.post('/auth/registration', {username, password})
    }
    static async logout() {
        return $api.post('/auth/logout')
    }
}