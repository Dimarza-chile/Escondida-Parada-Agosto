// Cronograma base + actividades complementarias
// Generado desde: GANTT_SLS22601_REV_0-DIMARZA.pdf
// Polines: Informe_de_Polines_L2_W30.pdf (CV201, CV202, FE207) + criticidad extraida por color
const SEED_DATA = {
  "paradaNombre": "SHUTDOWN SLS22601 - MEC1",
  "paradaSubtitulo": "Agosto 2026",
  "turnos": [
    "2026-08-05T07:00:00",
    "2026-08-05T19:00:00",
    "2026-08-06T07:00:00",
    "2026-08-06T19:00:00",
    "2026-08-07T07:00:00",
    "2026-08-07T19:00:00",
    "2026-08-08T07:00:00",
    "2026-08-08T19:00:00",
    "2026-08-09T07:00:00",
    "2026-08-09T19:00:00",
    "2026-08-10T07:00:00",
    "2026-08-10T19:00:00",
    "2026-08-11T07:00:00"
  ],
  "turnoLabels": [
    "07:00 05-Ago",
    "19:00 05-Ago",
    "07:00 06-Ago",
    "19:00 06-Ago",
    "07:00 07-Ago",
    "19:00 07-Ago",
    "07:00 08-Ago",
    "19:00 08-Ago",
    "07:00 09-Ago",
    "19:00 09-Ago",
    "07:00 10-Ago",
    "19:00 10-Ago",
    "07:00 11-Ago"
  ],
  "hhPlanPorTurno": [
    28.0,
    73.0,
    85.0,
    86.0,
    89.5,
    83.0,
    77.0,
    76.0,
    58.0,
    32.0,
    18.0,
    1.0,
    0
  ],
  "totalHH": 706.5,
  "cuadrillas": [
    {
      "grupo": "G1",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 0,
      "total": 5
    },
    {
      "grupo": "G2",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 0,
      "total": 5
    },
    {
      "grupo": "G3",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 1,
      "total": 6
    },
    {
      "grupo": "G4",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 1,
      "total": 6
    },
    {
      "grupo": "G5",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 0,
      "total": 5
    },
    {
      "grupo": "G6",
      "mecanicos": 3,
      "soldadores": 2,
      "rigger": 0,
      "total": 5
    },
    {
      "grupo": "G7",
      "mecanicos": 6,
      "soldadores": 1,
      "rigger": 0,
      "total": 7
    }
  ],
  "ots": [
    {
      "otNum": 419345865,
      "cuadrilla": "G1",
      "area": "CORREA CV201",
      "tipo": "Planificado",
      "descripcion": "Cambio de placas CV201",
      "pesoPlanHH": 72.0,
      "inicio": "2026-08-05T13:00:00",
      "fin": "2026-08-08T13:00:00",
      "subactividades": [
        {
          "nombre": "Cambio de placas CV201",
          "pesoHH": 72.0,
          "inicio": "2026-08-05T13:00:00",
          "fin": "2026-08-08T13:00:00"
        }
      ],
      "hhPorTurno": [
        6.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        6.0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 419329818,
      "cuadrilla": "G2",
      "area": "CORREA CV201",
      "tipo": "Planificado",
      "descripcion": "MC Cambio Faldon CV-201",
      "pesoPlanHH": 96.0,
      "inicio": "2026-08-05T13:00:00",
      "fin": "2026-08-09T13:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Faldon CV-201",
          "pesoHH": 48.0,
          "inicio": "2026-08-05T13:00:00",
          "fin": "2026-08-07T13:00:00"
        },
        {
          "nombre": "Instalar Faldon CV-201",
          "pesoHH": 48.0,
          "inicio": "2026-08-07T13:00:00",
          "fin": "2026-08-09T13:00:00"
        }
      ],
      "hhPorTurno": [
        6.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        12.0,
        6.0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620986528,
      "cuadrilla": "G1",
      "area": "CORREA CV201",
      "tipo": "Planificado",
      "descripcion": "34W Mec Camb Cajn Alim CV201 SD",
      "pesoPlanHH": 40.0,
      "inicio": "2026-08-08T07:00:00",
      "fin": "2026-08-10T05:00:00",
      "subactividades": [
        {
          "nombre": "Restaurar Guardera Faldon Rev Cajon Alim",
          "pesoHH": 2.0,
          "inicio": "2026-08-08T07:00:00",
          "fin": "2026-08-08T09:00:00"
        },
        {
          "nombre": "Cambiar Elementos Desgaste",
          "pesoHH": 36.0,
          "inicio": "2026-08-08T13:00:00",
          "fin": "2026-08-10T01:00:00"
        },
        {
          "nombre": "Montar Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T03:00:00",
          "fin": "2026-08-10T05:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        8.0,
        12.0,
        12.0,
        8.0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621256911,
      "cuadrilla": "G2",
      "area": "CORREA CV201",
      "tipo": "Planificado",
      "descripcion": "40W Mec Camb Poli Crga CV201 SD",
      "pesoPlanHH": 24.0,
      "inicio": "2026-08-09T13:00:00",
      "fin": "2026-08-10T13:00:00",
      "subactividades": [
        {
          "nombre": "Instalar Dispo Levnt Cv Pc Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T13:00:00",
          "fin": "2026-08-09T15:00:00"
        },
        {
          "nombre": "Apoyar Soldador Polin Pi Sol",
          "pesoHH": 24.0,
          "inicio": "2026-08-09T13:00:00",
          "fin": "2026-08-10T13:00:00"
        },
        {
          "nombre": "Levantar Correa Pc Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T15:00:00",
          "fin": "2026-08-09T17:00:00"
        },
        {
          "nombre": "Cambiar Polines Mal Estado Pc Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T17:00:00",
          "fin": "2026-08-09T19:00:00"
        },
        {
          "nombre": "Bajar Correa Cv206 Pc Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T19:00:00",
          "fin": "2026-08-09T21:00:00"
        },
        {
          "nombre": "Instalar Tecle Retorno Pr Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T21:00:00",
          "fin": "2026-08-09T23:00:00"
        },
        {
          "nombre": "Levantar Correa Pr Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T23:00:00",
          "fin": "2026-08-10T01:00:00"
        },
        {
          "nombre": "Cambiar Polines Mal Estado Pr Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T01:00:00",
          "fin": "2026-08-10T03:00:00"
        },
        {
          "nombre": "Revisar Rodillos Cv Detenida Pi Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T03:00:00",
          "fin": "2026-08-10T05:00:00"
        },
        {
          "nombre": "Cambiar Polines Mal Estado Pi Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T05:00:00",
          "fin": "2026-08-10T07:00:00"
        },
        {
          "nombre": "Instalar Tecle Carga Pi Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T07:00:00",
          "fin": "2026-08-10T09:00:00"
        },
        {
          "nombre": "Retirar Estac Cambiar Polin Pi Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T09:00:00",
          "fin": "2026-08-10T11:00:00"
        },
        {
          "nombre": "Instalar Estacion Polin Pi Mec",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T11:00:00",
          "fin": "2026-08-10T13:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        6.0,
        12.0,
        6.0,
        0,
        0
      ],
      "campaniaPolines": true
    },
    {
      "otNum": 621256912,
      "cuadrilla": "G1",
      "area": "CORREA CV201",
      "tipo": "Planificado",
      "descripcion": "40W Mec Camb Hoja Rasp CV201 SDCCE",
      "pesoPlanHH": 1.0,
      "inicio": "2026-08-06T07:00:00",
      "fin": "2026-08-06T08:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Protecciones",
          "pesoHH": 1.0,
          "inicio": "2026-08-06T07:00:00",
          "fin": "2026-08-06T08:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        1.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 419202031,
      "cuadrilla": "G3",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "Cambiar cinta CV202",
      "pesoPlanHH": 37.5,
      "inicio": "2026-08-05T13:00:00",
      "fin": "2026-08-10T20:00:00",
      "subactividades": [
        {
          "nombre": "Destensar Cinta y fijar contrapeso",
          "pesoHH": 2.0,
          "inicio": "2026-08-05T13:00:00",
          "fin": "2026-08-05T15:00:00"
        },
        {
          "nombre": "Desplazar electroiman",
          "pesoHH": 1.0,
          "inicio": "2026-08-05T15:00:00",
          "fin": "2026-08-05T16:00:00"
        },
        {
          "nombre": "Retiro de gualderas y placas",
          "pesoHH": 4.0,
          "inicio": "2026-08-05T15:00:00",
          "fin": "2026-08-05T19:00:00"
        },
        {
          "nombre": "Retirar Estructura y Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-05T19:00:00",
          "fin": "2026-08-05T21:00:00"
        },
        {
          "nombre": "Retirar Estaciones Polines Zona Emp",
          "pesoHH": 3.0,
          "inicio": "2026-08-05T21:00:00",
          "fin": "2026-08-06T00:00:00"
        },
        {
          "nombre": "Retirar pullcord Zona empalme",
          "pesoHH": 1.0,
          "inicio": "2026-08-05T21:00:00",
          "fin": "2026-08-05T22:00:00"
        },
        {
          "nombre": "Retirar Equipo Vulca SUP-INF",
          "pesoHH": 2.0,
          "inicio": "2026-08-07T10:30:00",
          "fin": "2026-08-07T12:30:00"
        },
        {
          "nombre": "Medir Dureza",
          "pesoHH": 0.5,
          "inicio": "2026-08-07T12:30:00",
          "fin": "2026-08-07T13:00:00"
        },
        {
          "nombre": "Traslado de ejes a CV206 Para enrollador",
          "pesoHH": 6.0,
          "inicio": "2026-08-07T13:00:00",
          "fin": "2026-08-07T19:00:00"
        },
        {
          "nombre": "Retirar Polines Paso Cinta",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T02:00:00",
          "fin": "2026-08-10T04:00:00"
        },
        {
          "nombre": "Instalar placas y guarderas",
          "pesoHH": 12.0,
          "inicio": "2026-08-10T04:00:00",
          "fin": "2026-08-10T16:00:00"
        },
        {
          "nombre": "Instalar intrumentacion zona empalme",
          "pesoHH": 1.0,
          "inicio": "2026-08-10T07:00:00",
          "fin": "2026-08-10T08:00:00"
        },
        {
          "nombre": "Tensar Cinta",
          "pesoHH": 2.0,
          "inicio": "2026-08-10T08:00:00",
          "fin": "2026-08-10T10:00:00"
        },
        {
          "nombre": "Instalar Estructura y Protecciones",
          "pesoHH": 4.0,
          "inicio": "2026-08-10T16:00:00",
          "fin": "2026-08-10T20:00:00"
        }
      ],
      "hhPorTurno": [
        6.0,
        5.0,
        0,
        0,
        8.5,
        0,
        0,
        0,
        0,
        5.0,
        12.0,
        1.0,
        0
      ]
    },
    {
      "otNum": 419359411,
      "cuadrilla": "G3",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "MC Cambiar Polea Tensora CV202",
      "pesoPlanHH": 22.0,
      "inicio": "2026-08-08T05:00:00",
      "fin": "2026-08-09T03:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Polea Tensora CV202",
          "pesoHH": 11.0,
          "inicio": "2026-08-08T05:00:00",
          "fin": "2026-08-08T16:00:00"
        },
        {
          "nombre": "Instalar Polea Tensora CV202",
          "pesoHH": 11.0,
          "inicio": "2026-08-08T16:00:00",
          "fin": "2026-08-09T03:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        2.0,
        12.0,
        8.0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 418691864,
      "cuadrilla": "G4",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "MC Cambio de polea motriz CV202",
      "pesoPlanHH": 30.0,
      "inicio": "2026-08-08T00:00:00",
      "fin": "2026-08-09T08:00:00",
      "subactividades": [
        {
          "nombre": "Montar Prensas P1 y P2 en retorno",
          "pesoHH": 2.0,
          "inicio": "2026-08-08T00:00:00",
          "fin": "2026-08-08T02:00:00"
        },
        {
          "nombre": "Retiro de Chute y Protecciones",
          "pesoHH": 4.0,
          "inicio": "2026-08-08T02:00:00",
          "fin": "2026-08-08T06:00:00"
        },
        {
          "nombre": "Retirar polea Motriz 787x1219",
          "pesoHH": 9.0,
          "inicio": "2026-08-08T07:00:00",
          "fin": "2026-08-08T16:00:00"
        },
        {
          "nombre": "Montar polea Motriz 787x1219",
          "pesoHH": 9.0,
          "inicio": "2026-08-08T16:00:00",
          "fin": "2026-08-09T01:00:00"
        },
        {
          "nombre": "Montaje de chute y Protecciones",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T01:00:00",
          "fin": "2026-08-09T02:00:00"
        },
        {
          "nombre": "Montaje de chute y Protecciones (Mec) 2",
          "pesoHH": 4.0,
          "inicio": "2026-08-09T03:00:00",
          "fin": "2026-08-09T07:00:00"
        },
        {
          "nombre": "Retirar Prensas P1 y P2 en retorno (final)",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T07:00:00",
          "fin": "2026-08-09T08:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        6.0,
        12.0,
        11.0,
        1.0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 419153644,
      "cuadrilla": "G3",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "MC Cambiar Polea Def Sup CV202",
      "pesoPlanHH": 22.0,
      "inicio": "2026-08-09T04:00:00",
      "fin": "2026-08-10T02:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Polea Def sup CV202",
          "pesoHH": 11.0,
          "inicio": "2026-08-09T04:00:00",
          "fin": "2026-08-09T15:00:00"
        },
        {
          "nombre": "Instalar Polea Def sup CV202",
          "pesoHH": 11.0,
          "inicio": "2026-08-09T15:00:00",
          "fin": "2026-08-10T02:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3.0,
        12.0,
        7.0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621256917,
      "cuadrilla": "G3",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "40W Mec Camb Cajn Alim CV202 SDCCE",
      "pesoPlanHH": 59.0,
      "inicio": "2026-08-05T16:00:00",
      "fin": "2026-08-08T09:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-05T16:00:00",
          "fin": "2026-08-05T18:00:00"
        },
        {
          "nombre": "Cambiar Elementos Desgaste",
          "pesoHH": 55.0,
          "inicio": "2026-08-05T22:00:00",
          "fin": "2026-08-08T05:00:00"
        },
        {
          "nombre": "Montar Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-08T07:00:00",
          "fin": "2026-08-08T09:00:00"
        }
      ],
      "hhPorTurno": [
        2.0,
        9.0,
        12.0,
        12.0,
        12.0,
        10.0,
        2.0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621256920,
      "cuadrilla": "G4",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "40W Mec Camb Plac Dgast CV202 SD",
      "pesoPlanHH": 28.0,
      "inicio": "2026-08-05T13:00:00",
      "fin": "2026-08-06T23:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-05T13:00:00",
          "fin": "2026-08-05T15:00:00"
        },
        {
          "nombre": "Cambiar Elementos Desgaste",
          "pesoHH": 24.0,
          "inicio": "2026-08-05T19:00:00",
          "fin": "2026-08-06T19:00:00"
        },
        {
          "nombre": "Montar Protecciones",
          "pesoHH": 2.0,
          "inicio": "2026-08-06T21:00:00",
          "fin": "2026-08-06T23:00:00"
        }
      ],
      "hhPorTurno": [
        2.0,
        12.0,
        12.0,
        2.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 419073290,
      "cuadrilla": "G6",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "Reparacion Linea de 72 CV202",
      "pesoPlanHH": 48.0,
      "inicio": "2026-08-05T13:00:00",
      "fin": "2026-08-07T13:00:00",
      "subactividades": [
        {
          "nombre": "Reparar Linea de 72 bajo CV202",
          "pesoHH": 48.0,
          "inicio": "2026-08-05T13:00:00",
          "fin": "2026-08-07T13:00:00"
        }
      ],
      "hhPorTurno": [
        6.0,
        12.0,
        12.0,
        12.0,
        6.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621256919,
      "cuadrilla": "G4",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "40W Mec Camb Poli Crga y Retor CV202 SD",
      "pesoPlanHH": 36.0,
      "inicio": "2026-08-06T19:00:00",
      "fin": "2026-08-08T07:00:00",
      "subactividades": [
        {
          "nombre": "Restaurar Polines Cv202",
          "pesoHH": 36.0,
          "inicio": "2026-08-06T19:00:00",
          "fin": "2026-08-08T07:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        12.0,
        12.0,
        12.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "campaniaPolines": true
    },
    {
      "otNum": 418929313,
      "cuadrilla": "G4",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "MC Instalar ventanillas cupulas CV202",
      "pesoPlanHH": 11.0,
      "inicio": "2026-08-09T01:00:00",
      "fin": "2026-08-09T12:00:00",
      "subactividades": [
        {
          "nombre": "Instalar ventanillas cupulas CV202 (1)",
          "pesoHH": 11.0,
          "inicio": "2026-08-09T01:00:00",
          "fin": "2026-08-09T12:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        6.0,
        5.0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621256921,
      "cuadrilla": "G5",
      "area": "CORREA CV202",
      "tipo": "Planificado",
      "descripcion": "40W Mec Rest Chut Movil CV202 SD",
      "pesoPlanHH": 22.0,
      "inicio": "2026-08-08T19:00:00",
      "fin": "2026-08-09T17:00:00",
      "subactividades": [
        {
          "nombre": "Restaurar Chute Movil CV202",
          "pesoHH": 22.0,
          "inicio": "2026-08-08T19:00:00",
          "fin": "2026-08-09T17:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        12.0,
        10.0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620768453,
      "cuadrilla": "G5",
      "area": "BIN 4-5",
      "tipo": "Planificado",
      "descripcion": "34S Mec Rest Comp Tolv BN004 SD",
      "pesoPlanHH": 32.0,
      "inicio": "2026-08-05T23:00:00",
      "fin": "2026-08-07T07:00:00",
      "subactividades": [
        {
          "nombre": "Retiro de placas",
          "pesoHH": 16.0,
          "inicio": "2026-08-05T23:00:00",
          "fin": "2026-08-06T15:00:00"
        },
        {
          "nombre": "Instalacion de placas",
          "pesoHH": 16.0,
          "inicio": "2026-08-06T15:00:00",
          "fin": "2026-08-07T07:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        8.0,
        12.0,
        12.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620768455,
      "cuadrilla": "G5",
      "area": "BIN 4-5",
      "tipo": "Planificado",
      "descripcion": "34S Mec Rest Comp Tolv BN005 SD",
      "pesoPlanHH": 32.0,
      "inicio": "2026-08-07T11:00:00",
      "fin": "2026-08-08T19:00:00",
      "subactividades": [
        {
          "nombre": "Retiro de placas",
          "pesoHH": 16.0,
          "inicio": "2026-08-07T11:00:00",
          "fin": "2026-08-08T03:00:00"
        },
        {
          "nombre": "Instalacion de placas",
          "pesoHH": 16.0,
          "inicio": "2026-08-08T03:00:00",
          "fin": "2026-08-08T19:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        8.0,
        12.0,
        12.0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 419408461,
      "cuadrilla": "G7",
      "area": "FEEDER 207",
      "tipo": "Planificado",
      "descripcion": "Reparar Bin 4-5 Carro Movil",
      "pesoPlanHH": 44.0,
      "inicio": "2026-08-06T04:00:00",
      "fin": "2026-08-08T00:00:00",
      "subactividades": [
        {
          "nombre": "Reparar Bin 4-5 Carro Movil",
          "pesoHH": 44.0,
          "inicio": "2026-08-06T04:00:00",
          "fin": "2026-08-08T00:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        3.0,
        12.0,
        12.0,
        12.0,
        5.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620835046,
      "cuadrilla": "G6",
      "area": "FEEDER 207",
      "tipo": "Planificado",
      "descripcion": "34W Mec Camb Cajn Alim FE207 SD",
      "pesoPlanHH": 17.0,
      "inicio": "2026-08-08T00:00:00",
      "fin": "2026-08-08T17:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Lifters Placas y Gualderas (1)",
          "pesoHH": 9.0,
          "inicio": "2026-08-08T00:00:00",
          "fin": "2026-08-08T09:00:00"
        },
        {
          "nombre": "Instalar Lifters Placas y Gualderas (1)",
          "pesoHH": 8.0,
          "inicio": "2026-08-08T09:00:00",
          "fin": "2026-08-08T17:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        7.0,
        10.0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620835047,
      "cuadrilla": "G6",
      "area": "FEEDER 207",
      "tipo": "Planificado",
      "descripcion": "34W Mec Camb Poli Crga FE207 SD",
      "pesoPlanHH": 20.0,
      "inicio": "2026-08-08T17:00:00",
      "fin": "2026-08-09T13:00:00",
      "subactividades": [
        {
          "nombre": "Instalar Dispo Levnt Zona Polines Carga",
          "pesoHH": 4.0,
          "inicio": "2026-08-08T17:00:00",
          "fin": "2026-08-08T21:00:00"
        },
        {
          "nombre": "Levantar Correa Zona Polines de Carga",
          "pesoHH": 1.0,
          "inicio": "2026-08-08T21:00:00",
          "fin": "2026-08-08T22:00:00"
        },
        {
          "nombre": "Cambiar Polines Carga Segun Infe Moncon (1)",
          "pesoHH": 2.0,
          "inicio": "2026-08-08T22:00:00",
          "fin": "2026-08-09T00:00:00"
        },
        {
          "nombre": "Bajar Correa Polines Carga",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T00:00:00",
          "fin": "2026-08-09T01:00:00"
        },
        {
          "nombre": "Instalar Dispo Levnt Zona Polines Retor",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T01:00:00",
          "fin": "2026-08-09T03:00:00"
        },
        {
          "nombre": "Levantar Correa Zona Polines de Retorno",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T03:00:00",
          "fin": "2026-08-09T04:00:00"
        },
        {
          "nombre": "Cambiar Polines Carga Segun Infe Moncon (2)",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T04:00:00",
          "fin": "2026-08-09T06:00:00"
        },
        {
          "nombre": "Bajar Correa Polines Retorno",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T06:00:00",
          "fin": "2026-08-09T07:00:00"
        },
        {
          "nombre": "Instalar Dispo Levnt Zona Polines Impa",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T07:00:00",
          "fin": "2026-08-09T09:00:00"
        },
        {
          "nombre": "Levantar Correa Zona Polines de Impacto",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T09:00:00",
          "fin": "2026-08-09T10:00:00"
        },
        {
          "nombre": "Cambiar Polines Carga Segun Infe Moncon (3)",
          "pesoHH": 2.0,
          "inicio": "2026-08-09T10:00:00",
          "fin": "2026-08-09T12:00:00"
        },
        {
          "nombre": "Bajar Correa Polines Impacto",
          "pesoHH": 1.0,
          "inicio": "2026-08-09T12:00:00",
          "fin": "2026-08-09T13:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        2.0,
        12.0,
        6.0,
        0,
        0,
        0,
        0
      ],
      "campaniaPolines": true
    },
    {
      "otNum": 419281529,
      "cuadrilla": "G6",
      "area": "FEEDER 207",
      "tipo": "Planificado",
      "descripcion": "MC Rep rotura chute FE207 a CV203",
      "pesoPlanHH": 11.0,
      "inicio": "2026-08-07T13:00:00",
      "fin": "2026-08-08T00:00:00",
      "subactividades": [
        {
          "nombre": "MC Rep rotura chute FE207 a CV203",
          "pesoHH": 11.0,
          "inicio": "2026-08-07T13:00:00",
          "fin": "2026-08-08T00:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        6.0,
        5.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 620835044,
      "cuadrilla": "G4",
      "area": "FEEDER 207",
      "tipo": "Planificado",
      "descripcion": "34W Mec Camb Rasp Prim FE207 SD",
      "pesoPlanHH": 1.0,
      "inicio": "2026-08-07T12:00:00",
      "fin": "2026-08-07T13:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Protecciones",
          "pesoHH": 1.0,
          "inicio": "2026-08-07T12:00:00",
          "fin": "2026-08-07T13:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        1.0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "otNum": 621075070,
      "cuadrilla": "G4",
      "area": "CORREA CV206",
      "tipo": "Planificado",
      "descripcion": "34W Mec Camb Hoja Rasp CV206 SD",
      "pesoPlanHH": 1.0,
      "inicio": "2026-08-08T12:00:00",
      "fin": "2026-08-08T13:00:00",
      "subactividades": [
        {
          "nombre": "Retirar Protecciones",
          "pesoHH": 1.0,
          "inicio": "2026-08-08T12:00:00",
          "fin": "2026-08-08T13:00:00"
        }
      ],
      "hhPorTurno": [
        0,
        0,
        0,
        0,
        0,
        0,
        1.0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "complementarias": [
    {
      "nombre": "Apoyar Mant & calibracion Pesometro",
      "tag": "INST",
      "otRelacionada": 620693403,
      "otDescripcion": "34W Inst Cali Pesom CV201 SD",
      "area": "CORREA CV201",
      "inicio": "2026-08-09T19:00:00",
      "fin": "2026-08-10T07:00:00",
      "pesoHH": 12.0
    },
    {
      "nombre": "Calibrar Pesometro",
      "tag": "INST",
      "otRelacionada": 620693403,
      "otDescripcion": "34W Inst Cali Pesom CV201 SD",
      "area": "CORREA CV201",
      "inicio": "2026-08-09T19:00:00",
      "fin": "2026-08-10T01:00:00",
      "pesoHH": 6.0
    },
    {
      "nombre": "Apoyar Mecanico Soldador",
      "tag": "INST",
      "otRelacionada": 620693403,
      "otDescripcion": "34W Inst Cali Pesom CV201 SD",
      "area": "CORREA CV201",
      "inicio": "2026-08-09T19:00:00",
      "fin": "2026-08-09T21:00:00",
      "pesoHH": 2.0
    }
  ],
  "polinesPorOt": {
    "621256911": [
      {
        "id": "CV201-Carga-Cama5",
        "correa": "CV201",
        "estacion": "Cama 5",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "2 polines centrales de cama de impacto trabados y gastados",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Carga-8",
        "correa": "CV201",
        "estacion": "8",
        "ubicacion": "Carga",
        "tipoEstacion": "Normal",
        "descripcion": "Polin derecho reventado con 50°c actualmente, polin izquierdo trabado",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Carga-46",
        "correa": "CV201",
        "estacion": "46",
        "ubicacion": "Carga",
        "tipoEstacion": "Normal",
        "descripcion": "Polin con temperatura 45°c",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV201-Retorno-1",
        "correa": "CV201",
        "estacion": "1",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin de retorno recto trabado y contaminado con material",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-2",
        "correa": "CV201",
        "estacion": "2",
        "ubicacion": "Retorno",
        "tipoEstacion": "Invertido en V",
        "descripcion": "Polin izquierdo trabado",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-3",
        "correa": "CV201",
        "estacion": "3",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polines trabados por material acumulado",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-4",
        "correa": "CV201",
        "estacion": "4",
        "ubicacion": "Retorno",
        "tipoEstacion": "Estacion en V",
        "descripcion": "Polines trabados por material acumulado",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-5",
        "correa": "CV201",
        "estacion": "5",
        "ubicacion": "Retorno",
        "tipoEstacion": "Estacion en V",
        "descripcion": "Polines trabados por material acumulado, polin izquierdo perforado",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-6",
        "correa": "CV201",
        "estacion": "6",
        "ubicacion": "Retorno",
        "tipoEstacion": "Estacion en V",
        "descripcion": "Polines trabados por material acumulado",
        "cantidad": 2,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-7",
        "correa": "CV201",
        "estacion": "7",
        "ubicacion": "Retorno",
        "tipoEstacion": "Estacion en V",
        "descripcion": "Polin izquierdo trabado y perforado",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-23",
        "correa": "CV201",
        "estacion": "23",
        "ubicacion": "Retorno",
        "tipoEstacion": "Estacion en V",
        "descripcion": "Polin derecho con desgaste en anillos de goma",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV201-Retorno-25",
        "correa": "CV201",
        "estacion": "25",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin con desgaste por material acumulado",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV201-Retorno-26",
        "correa": "CV201",
        "estacion": "26",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin recto ausente",
        "cantidad": 1,
        "aviso": "444489569",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      }
    ],
    "621256919": [
      {
        "id": "CV202-Carga-5",
        "correa": "CV202",
        "estacion": "5",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polin central con desgaste y trabado",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV202-Carga-8",
        "correa": "CV202",
        "estacion": "8",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polin central trabado",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Carga-9",
        "correa": "CV202",
        "estacion": "9",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polin central ausente",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Carga-10",
        "correa": "CV202",
        "estacion": "10",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polin central trabado",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Carga-11",
        "correa": "CV202",
        "estacion": "11",
        "ubicacion": "Carga",
        "tipoEstacion": "Normal",
        "descripcion": "Polin central con desgaste",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Carga-99",
        "correa": "CV202",
        "estacion": "99",
        "ubicacion": "Carga",
        "tipoEstacion": "Normal",
        "descripcion": "Polines con ruido",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Carga-126",
        "correa": "CV202",
        "estacion": "126",
        "ubicacion": "Carga",
        "tipoEstacion": "Normal",
        "descripcion": "Polines con ruido",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV202-Retorno-1",
        "correa": "CV202",
        "estacion": "1",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin de retorno recto con desgaste",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Retorno-3",
        "correa": "CV202",
        "estacion": "3",
        "ubicacion": "Retorno",
        "tipoEstacion": "Autoalineante Asgco",
        "descripcion": "Polin con desgaste",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV202-Retorno-25",
        "correa": "CV202",
        "estacion": "25",
        "ubicacion": "Retorno",
        "tipoEstacion": "Anillos de goma",
        "descripcion": "Polin derecho trabado",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Retorno-26",
        "correa": "CV202",
        "estacion": "26",
        "ubicacion": "Retorno",
        "tipoEstacion": "Anillos de goma",
        "descripcion": "Polin derecho con desgaste",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 2,
        "criticidadLabel": "Media (Insatisfactorio)"
      },
      {
        "id": "CV202-Retorno-35",
        "correa": "CV202",
        "estacion": "35",
        "ubicacion": "Retorno",
        "tipoEstacion": "Anillos de goma",
        "descripcion": "Polin derecho trabado con desgaste",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV202-Retorno-39",
        "correa": "CV202",
        "estacion": "39",
        "ubicacion": "Retorno",
        "tipoEstacion": "Anillos de goma",
        "descripcion": "Polin derecho con ruido",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "CV202-Retorno-53",
        "correa": "CV202",
        "estacion": "53",
        "ubicacion": "Retorno",
        "tipoEstacion": "Polin polea invertido",
        "descripcion": "Polin con eje desplazado",
        "cantidad": 1,
        "aviso": "444489577",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      }
    ],
    "620835047": [
      {
        "id": "FE207-Carga-6",
        "correa": "FE207",
        "estacion": "6",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-7",
        "correa": "FE207",
        "estacion": "7",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-8",
        "correa": "FE207",
        "estacion": "8",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-9",
        "correa": "FE207",
        "estacion": "9",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-10",
        "correa": "FE207",
        "estacion": "10",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-11",
        "correa": "FE207",
        "estacion": "11",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-12",
        "correa": "FE207",
        "estacion": "12",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-13",
        "correa": "FE207",
        "estacion": "13",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-14",
        "correa": "FE207",
        "estacion": "14",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-15",
        "correa": "FE207",
        "estacion": "15",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-16",
        "correa": "FE207",
        "estacion": "16",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-17",
        "correa": "FE207",
        "estacion": "17",
        "ubicacion": "Carga",
        "tipoEstacion": "Impacto",
        "descripcion": "Polines contaminados con material y trabados / realizar Aseo-Cambiar polin segun condicion",
        "cantidad": 3,
        "aviso": "3443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Carga-19",
        "correa": "FE207",
        "estacion": "19",
        "ubicacion": "Carga",
        "tipoEstacion": "",
        "descripcion": "Polin central con ruido",
        "cantidad": 1,
        "aviso": "1443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Retorno-1",
        "correa": "FE207",
        "estacion": "1",
        "ubicacion": "Retorno",
        "tipoEstacion": "",
        "descripcion": "Polin de retorno trabado con material acumulado",
        "cantidad": 1,
        "aviso": "1443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Retorno-2",
        "correa": "FE207",
        "estacion": "2",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin de retorno trabado con material acumulado",
        "cantidad": 1,
        "aviso": "1443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      },
      {
        "id": "FE207-Retorno-4",
        "correa": "FE207",
        "estacion": "4",
        "ubicacion": "Retorno",
        "tipoEstacion": "Recto",
        "descripcion": "Polin de retorno trabado con material acumulado",
        "cantidad": 1,
        "aviso": "1443631473",
        "criticidad": 1,
        "criticidadLabel": "Alta (Inaceptable)"
      }
    ]
  }
};
