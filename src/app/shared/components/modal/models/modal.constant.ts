import { Modal, TypeModal } from "./modal.model";


export const errorCode = {
    invalidCredentials : 401,
    
}

export const modalNotValid: Modal = {
    title: 'Datos ingresados invalidos',
    message: 'El email y/o contraseña son incorrectos',
    type: TypeModal.error
}