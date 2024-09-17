export type Materia = {
  id: string;
  nombre: string;
  estado: "Aprobada" | "En curso" | "No disponible" | "Disponible";
};

export type Cuatrimestre = {
  cuatrimestre: number;
  materias: Materia[];
};

export const planDeEstudios: Cuatrimestre[] = [
  {
    cuatrimestre: 1,
    materias: [
      {
        nombre: "Química General",
        id: "Química General",
        estado: "Disponible",
      },
      {
        nombre: "Biología Celular y Molecular",
        id: "Biología Celular y Molecular",
        estado: "Disponible",
      },
      {
        nombre: "Matemáticas Aplicadas",
        id: "Matemáticas Aplicadas",
        estado: "Aprobada",
      },
      {
        nombre: "Introducción a la Farmacia",
        id: "Introducción a la Farmacia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 2,
    materias: [
      {
        nombre: "Química Orgánica I",
        id: "Química Orgánica I",
        estado: "En curso",
      },
      {
        nombre: "Anatomía y Fisiología",
        id: "Anatomía y Fisiología",
        estado: "Disponible",
      },
      {
        nombre: "Microbiología",
        id: "Microbiología",
        estado: "Disponible",
      },
      {
        nombre: "Farmacología I",
        id: "Farmacología I",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 3,
    materias: [
      {
        nombre: "Química Orgánica II",
        id: "Química Orgánica II",
        estado: "Disponible",
      },
      {
        nombre: "Bioquímica",
        id: "Bioquímica",
        estado: "Disponible",
      },
      {
        nombre: "Farmacología II",
        id: "Farmacología II",
        estado: "Aprobada",
      },
      {
        nombre: "Toxicología",
        id: "Toxicología",
        estado: "En curso",
      },
    ],
  },
  {
    cuatrimestre: 4,
    materias: [
      {
        id: "Química Farmacéutica",
        nombre: "Química Farmacéutica",
        estado: "Disponible",
      },
      {
        id: "Farmacia Clínica",
        nombre: "Farmacia Clínica",
        estado: "No disponible",
      },
      {
        id: "Botánica y Fitoterapia",
        nombre: "Botánica y Fitoterapia",
        estado: "Disponible",
      },
      {
        id: "Estadística",
        nombre: "Estadística",
        estado: "Aprobada",
      },
    ],
  },
  {
    cuatrimestre: 5,
    materias: [
      {
        id: "Tecnología Farmacéutica",
        nombre: "Tecnología Farmacéutica",
        estado: "Disponible",
      },
      {
        id: "Farmacia Comunitaria",
        nombre: "Farmacia Comunitaria",
        estado: "En curso",
      },
      {
        id: "Química Analítica",
        nombre: "Química Analítica",
        estado: "Disponible",
      },
      {
        id: "Farmacognosia",
        nombre: "Farmacognosia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 6,
    materias: [
      {
        id: "Farmacia Hospitalaria",
        nombre: "Farmacia Hospitalaria",
        estado: "Disponible",
      },
      {
        id: "Legislación Farmacéutica",
        nombre: "Legislación Farmacéutica",
        estado: "Disponible",
      },
      {
        id: "Farmacia Industrial",
        nombre: "Farmacia Industrial",
        estado: "En curso",
      },
      {
        id: "Investigación en Farmacia",
        nombre: "Investigación en Farmacia",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 7,
    materias: [
      {
        id: "Prácticas Profesionales I",
        nombre: "Prácticas Profesionales I",
        estado: "Aprobada",
      },
      {
        id: "Farmacoterapia",
        nombre: "Farmacoterapia",
        estado: "Disponible",
      },
      {
        id: "Farmacovigilancia",
        nombre: "Farmacovigilancia",
        estado: "En curso",
      },
      {
        id: "Ética y Deontología Farmacéutica",
        nombre: "Ética y Deontología Farmacéutica",
        estado: "No disponible",
      },
    ],
  },
  {
    cuatrimestre: 8,
    materias: [
      {
        id: "Prácticas Profesionales II",
        nombre: "Prácticas Profesionales II",
        estado: "Disponible",
      },
      {
        id: "Gestión y Administración Farmacéutica",
        nombre: "Gestión y Administración Farmacéutica",
        estado: "Disponible",
      },
      {
        id: "Investigación Aplicada en Farmacia",
        nombre: "Investigación Aplicada en Farmacia",
        estado: "En curso",
      },
      {
        id: "Seminario de Investigación",
        nombre: "Seminario de Investigación",
        estado: "No disponible",
      },
    ],
  },
];

export const materiaPorId = planDeEstudios
  .flatMap(({ materias }) => materias)
  .reduce((map, materia) => {
    return map.set(materia.id, materia);
  }, new Map<string, Materia>());

export const materiasPorCuatri = planDeEstudios.reduce((map, cuatri) => {
  return map.set(cuatri.cuatrimestre.toString(), cuatri.materias);
}, new Map<string, Materia[]>());
