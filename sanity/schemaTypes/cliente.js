export const cliente = { 
    name: 'cliente',
    title: 'Clientes',
    type: 'document',
    fields: [

        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
        },
        {
            name: 'apellidos',
            title: 'Apellidos',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Correo',
            type: 'string'
        },
        {
            name: 'telefono',
            title: 'Número de Teléfono',
            type: 'string'
        },
        {
            name: 'tipoEnvio',
            title: 'Típo de Envío',
            type: 'string'
        },
        {
            name: 'direccion',
            title: 'Dirección de Envío',
            type: 'string'
        },
        {
            name: 'numeroCasa',
            title: 'Número de Casa/Departamento',
            type: 'string'
        },
        {
            name: 'comuna',
            title: 'Comuna de Envío',
            type: 'string'
        },
        {
            name: 'region',
            title: 'Región de Envío',
            type: 'string'
        },
        {
            name: 'detalles',
            title: 'Otros detalles ingresados por el cliente',
            type: 'string'
        },

    ] 

}
