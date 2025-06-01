import "dotenv-defaults/config";
import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig){
    if (process.env.envName) {
        require(`dotenv-defaults`).config({
            path: `./configs/.env.${process.env.envName}`,
            override: true,
            encoding: "utf8",
            defaults: "./configs/.env.defaults"
        })
    }
}

export default globalSetup