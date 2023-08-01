"use strict";
// import  mongoose from 'mongoose';
// import { app } from './app';
// const port:number = Number(process.env.PORT) || 5000
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const port = Number(process.env.PORT) || 5000;
const dataBaseUrl = process.env.DATABASE_URL || "default_connection_string";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Use custom connection options type
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Add any other options specific to your MongoDB configuration
            };
            yield mongoose_1.default.connect(dataBaseUrl, options);
            console.log('db connect successfully');
        }
        catch (err) {
            console.log('error occurred in connection', err);
        }
    });
}
main().then(() => {
    app_1.app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
});
