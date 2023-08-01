// import  mongoose from 'mongoose';
// import { app } from './app';
// const port:number = Number(process.env.PORT) || 5000

// const dataBaseUrl: string = process.env.DATABASE_URL || "default_connection_string";

// console.log(dataBaseUrl)

// //db connection

// main().catch(err => console.log(err));

// async function main() {
//     try{
//           await mongoose.connect(dataBaseUrl);
//   console.log('db coonect succcesfully');
//     }
//     catch(err){
//         console.log('error occured in coonection',err);
//     }

// }
// main();

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })


///mongodb

// import mongoose from 'mongoose';
// import { app } from './app';

// const port: number = Number(process.env.PORT) || 5000;
// const dataBaseUrl: string = process.env.DATABASE_URL || "default_connection_string";

// console.log(dataBaseUrl);

// async function main() {
//   try {
//     await mongoose.connect(dataBaseUrl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Add any other options specific to your MongoDB configuration
//     });
//     console.log('db connect successfully');
//   } catch (err) {
//     console.log('error occurred in connection', err);
//   }
// }

// main().then(() => {
//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// });



import mongoose from 'mongoose';
import { app } from './app';

const port: number = Number(process.env.PORT) || 5000;
const dataBaseUrl: string = process.env.DATABASE_URL || "default_connection_string";

console.log(dataBaseUrl);

async function main() {
  try {
    await mongoose.connect(dataBaseUrl, {
     
      
      // Add any other options specific to your MongoDB configuration
    });
    console.log('db connect successfully');
  } catch (err) {
    console.log('error occurred in connection', err);
  }
}

main().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
