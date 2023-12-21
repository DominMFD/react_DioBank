import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('Matheus', 'Matheus14')
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})