import { getLogementById, getLogements } from "../services/logements";

export function useLogements() {
    return getLogements()
}

export function useLogementsById(id) {
    return getLogementById(id)
}