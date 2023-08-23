import locationsList from "../datas/logements.json"

export function getLocations() {
    return locationsList
}

export function getLocationById(id) {
    return locationsList.find(location => location.id === id)
}