export const producto = { 
    name: 'producto',
    title: 'Producto',
    type: 'document',
    fields: [

        {
            name: 'nombre',
            title: 'Nombre del Producto',
            type: 'string',
        },
        {
            name: 'descripcion',
            title: 'Descripción del Producto',
            type: 'string'
        },
        {
            name: 'valor',
            title: 'Valor del producto',
            type: 'number'
        },
        {
            name: 'valor_id',
            title: 'Stripe Product Price ID',
            type: 'string'
        },
        {
            name: 'imagenes',
            title: 'Imagenes del Producto',
            type: 'array',
            of: [{type: 'image'}],
        },
        {
            name: 'stock',
            title: 'Stock del Producto',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Identificador del Producto',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLength: 96
            }
        },
        {
            name: 'categorias',
            title: 'Categorías',
            type: 'array',
            of: [{type: 'reference', to: {type: 'categoria'}}]
        },

    ] 

}
