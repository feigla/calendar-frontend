import $api from "../http";
import {AxiosResponse} from "axios";
import {IEvent} from "../../types/IEvent";


export default class EventService {
    static async createEvent(title: string, description: string, color: string, date: string): Promise<AxiosResponse<IEvent>> {
        return $api.post('/events', {title, description, color, date})
    }
    static async getUserEvents() {
        return $api.get(`events/user`)
    }
    static async deleteEvent(id: number) {
        return $api.delete(`events/${id}`)
    }
    static async updateEvent(title: string, description: string, color: string, id: number) {
        return $api.put(`events`, {title, description, color, id})
    }
}