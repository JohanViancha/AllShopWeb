

export enum TypeModal{
    info,
    error,
    success
}
export interface Modal {
    title: string
    message:string
    type: TypeModal
}
