const Activo={
    id: 1,
    Activo_tecnologico: "Computadora"

}

const Departamento={
    id: 1,
    Departamento: "201",
    Persona_encargada: "Maria"
}

const Control_de_Activo={
    id: 1,
    ActivoId: Activo.id,
    DepartamentoId: Departamento.id,
    Fecha_asignacion: "30/04/2024",
    Persona_asignada: "Juan",
    Tiempo_depreciacion: "5"
}

interface IActivo {
    id: Number;
    Activo_tecnologico: String;
}

interface IDepartamento {
    id: Number;
    Departamento: Number;
    Persona_encargada: String;
}

export interface IControl_de_Activo{
    id: Number;
    ActivoId: Number;
    DepartamentoId: Number;
    Fecha_asignacion: Number;
    Persona_asignada: String;
    Tiempo_depreciacion: Number
}

export const controlDeActivos = [
    {
        id: 1,
        ActivoId: 1,
        DepartamentoId: 1,
        Fecha_asignacion: "30/04/2024",
        Persona_asignada: "Juan",
        Tiempo_depreciacion: "5"
    },
    {
        id: 2,
        ActivoId: 2,
        DepartamentoId: 2,
        Fecha_asignacion: "01/05/2024",
        Persona_asignada: "Ana",
        Tiempo_depreciacion: "3"
    },
    {
        id: 3,
        ActivoId: 3,
        DepartamentoId: 1,
        Fecha_asignacion: "02/05/2024",
        Persona_asignada: "Pedro",
        Tiempo_depreciacion: "7"
    }
];

export interface ICity {
    id: number;
    wikiDataId: string;
    type: string;
    city: string;
    name: string;
    country: string;
    countryCode: string;
    region: string;
    regionCode: string;
    latitude: number;
    longitude: number;
}