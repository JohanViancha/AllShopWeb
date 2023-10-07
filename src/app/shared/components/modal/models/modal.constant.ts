import { Modal, TypeModal } from "./modal.model";


export const errorCode = {
    invalidCredentials : 401,
    incompleteParameters : 400,
    alreadyExists: 409,
    notVerified: 403
}

export const modalNotValid: Modal = {
    title: 'Datos ingresados invalidos',
    message: 'El email y/o contraseña son incorrectos',
    type: TypeModal.error
}


export const alreadyExists: Modal = {
    title: 'Datos ingresados ya existen',
    message: 'El recurso ya existe, ingrese otro email',
    type: TypeModal.error
}

export const incompleteParameters: Modal = {
    title: 'Datos ingresados están incompletos',
    message: 'El registro requiere todos los campos',
    type: TypeModal.error
}

export const uncontrolled: Modal = {
    title: 'Error en el servidor',
    message: 'El servicio no está disponible, consulte los logs',
    type: TypeModal.error
}

export const recordCreatedSuccessfully: Modal = {
    title: 'Registro exitoso',
    message: 'El usuario ha sido creado exitosamente',
    type: TypeModal.error
}

export const notVerified: Modal = {
    title: 'El usuario no está verificado',
    message: 'Revise su correo electronico, se le envió un mensaje de verificación',
    type: TypeModal.error
}