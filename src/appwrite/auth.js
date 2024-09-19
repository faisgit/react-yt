import {account} from './appwrite'
export const loginWithGoogle = async () => {
    try {
        await account.createOAuth2Session(
            'google',
            'http://localhost:5173/',
            'http://localhost:5173/'
        )
    } catch (error) {
        console.error(error)
    }
}

export const logoutUser =  async () => {
    try {
        await account.deleteSession('current')
        window.location.href='http://localhost:5173/'
    } catch (error) {
        console.error(error)
    }
}

export const getUser =  async () => {
    try {
        return await account.get()
    } catch (error) {
        console.error(error)        
    }
}