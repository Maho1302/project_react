import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const pokemonService = {
    getAll: () => axiosService.get(urls.pokemon),
    getById: (id) => axiosService.get(`${urls.pokemon}/${id}`),
}

export {
    pokemonService
}