import logementsList from "../datas/logements.json"

export function getLogements() {
    return logementsList
}

export function getLogementById(id) {
    return logementsList.find(logement => logement.id === id)
}