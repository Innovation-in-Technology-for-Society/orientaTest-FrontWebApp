import { EstudianteResponse } from "./estudiante-response.interface";

export interface AuthResponse{
    token: string;
    user: EstudianteResponse
}