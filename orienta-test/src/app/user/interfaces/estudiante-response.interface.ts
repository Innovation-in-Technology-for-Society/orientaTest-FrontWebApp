export interface EstudianteResponse{
    id:number
    nombre: string;
    apellido: string;
    correoElectronico: string;
    telefono: string;
    direccion: string;
    role: 'USER' | 'ADMIN';
}