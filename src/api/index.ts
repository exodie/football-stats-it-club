import axios from "axios";
import { CONSTANTS } from "../constants";

/**
 * Для получения данных про комманды
 */
class TeamAPI {
    public getList() {
        return axios.get(`${CONSTANTS.API_URL}/teams`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN
            }
        });
    }

    public get(id: string) {
        return axios.get(`${CONSTANTS.API_URL}/teams/${id}`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN
            }
        });
    }
}

/**
 * Для получения данных про матчи
 */
class MatchAPI {
    public getList() {
        return axios.get(`${CONSTANTS.API_URL}/matches`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN
            }
        });
    }

    public get(id: string) {
        return axios.get(`/matches/${id}`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN
            }
        });
    }
}

/**
 * Для получения данных про лиги
 */
class CompetitionAPI {
    public getList() {
        return axios.get(`${CONSTANTS.API_URL}/competitions?plan=TIER_ONE`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN,
            },
        });
    }

    public get(id: string) {
        return axios.get(`${CONSTANTS.API_URL}/competitions/${id}`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN,
            },
        });
    }

    public getTeams(id: string) {
        return axios.get(`${CONSTANTS.API_URL}/competitions/${id}/teams`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN,
            }
        });
    }

    public getMatches(id: string, filter: string = '') {
        return axios.get(`${CONSTANTS.API_URL}/competitions/${id}/matches${filter}`, {
            headers: {
                "X-Auth-Token": CONSTANTS.TOKEN,
            }
        });
    }
}

export const useTeamAPI = new TeamAPI();
export const useMatchAPI = new MatchAPI();
export const useCompetitionAPI = new CompetitionAPI();