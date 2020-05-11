//declare module 'nodemailer-express-handlebars';

interface ObjectHandle {
  viewEngine: {
    partialsDir: string
    defaultLayout: Boolean
  }
  viewPath: string
}

type FuncHbs = (n: ObjectHandle) => string

//export const hb: FuncHbs

declare let hbs: FuncHbs
export default hbs
