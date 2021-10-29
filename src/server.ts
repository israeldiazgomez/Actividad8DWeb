import { App} from "./config/index";
async function main(){
    const app = new App(5001)
    await app.listen()
}
main();