export const product = {
    name : 'product',
    title: 'Product',
    type: 'document',
    fields : [
        {
            name : 'title',
            title: 'Product Title',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'number'
        },
        {
            name : 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
              ]
         },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [
                {type: 'category'}
            ]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string',
            options: {
                list: [
                    {title: "Sweater", value: "Sweater"},
                    {title: "Dress", value: "Dress"},
                    {title: "T Shirts", value: "T Shirts"},
                    {title: "Pants", value: "Pants"},
                    {title: "Jackets", value: "Jackets"}
                ],
            },
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { 
                source: "name",
                maxLength: 90,
            }
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'care',
            title: 'Care',
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}