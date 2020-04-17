export const SERVER_PORT: number = Number(process.env.PORT) || 5000;
export const SEED: string = 'esteequipoesunariataalv';
export const GOOGLE_NOTIFICATIONS =
  'key=AAAAxsUyi4s:APA91bFJeEHjr5a9LbnbvAutO4Ug9Nktekol_VtRZ6kRW5JrsAsFQI7PyDmKzhYC9E1hhnU_TPePbkDhCfdZhZqIwVee7Z--Xv3PXYzfH3oudMqfrP9LF5-h8wqU7VevrtXLiY5ERc4';
export const TOKEN_CAD = '60d';
export const URL_DB =
  process.env.NODE_ENV === 'dev'
//? 'mongodb+srv://marco_diaz:pataPON3@cluster0-jm5fl.mongodb.net/sautdiaz?retryWrites=true&w=majority'
//: // ? 'mongodb+srv://marco_diaz:pataPON3@cluster0-jm5fl.mongodb.net/sautdiaz?retryWrites=true&w=majority'
'mongodb://localhost:27017/indian';
