import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";


const options : swaggerJSDoc.Options =  {
    swaggerDefinition:{
        openapi: '3.0.2',
        tags:[
            {
                name:'Products',
                description: 'API operations related to products'
            }
        ],
        info:{
            title:'REST API node.js / Express / TypeScript',
            version:'1.0.0',
            description:'API Docs for Products by: Ing. Benjamín S.'
        }
    },
    apis:['./src/router.ts'],
}


const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss:`
        .topbar-wrapper .link{
            content: url('https://imgs.search.brave.com/wejBI3K-vnAG_I1Cu_QAxDYT6dp7nOsxA4sP_Wjlljc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcmlj/a2FuZC1tb3J0eS1w/b3J0YWwtZXNjYXBl/LXN0aWNrZXItdThm/ZWw5dzB4d281bXY2/Mi5wbmc');
            height: 30px:
            width: auto;
        }
        .swagger-ui .topbar{
            background-color: #000;
        }
    `,
    customSiteTitle: 'La documentación de mi API'
}
export default swaggerSpec
export{
    swaggerUiOptions
}