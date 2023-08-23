import { getLocationById, getLocations } from "../services/logements";

export function useLocations() {
    return getLocations()
}

export function useLocationsById(id) {
    return getLocationById(id)
}