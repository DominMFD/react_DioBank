import { IUserData } from "../Interfaces/IUserData"

interface IDioBank {
    login: boolean,
    user?: IUserData

}

const dioBank = {
    login: false,
    user: {}
}

export const createLocalStorage = (): void => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank))
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('dioBank')
}

export const changeLocalStorage = (dioBank: IDioBank) => {
    localStorage.setItem('dioBank', JSON.stringify(dioBank))
}