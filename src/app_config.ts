import * as path from "path";
import * as dotenv from "dotenv";
import { INestApplication } from "@nestjs/common";

export default class AppConfig {
    static readonly ENVS: 'dev' | 'staging' | 'prod' = 'dev';
    static get isProduction(): boolean {
        return this.ENVS === 'prod';
    }
    private static app: INestApplication;

    public static init(app: INestApplication) {
        this.setupEnvironments();
        this.app = app;

        this.initDependencies();
    }

    private static setupEnvironments() {
        const envPath = path.resolve(__dirname, `../../envs/.${this.ENVS}.env`);
        dotenv.config({
            path: envPath,
        });
        console.log('Test:', process.env.TEST_KEY);
    }

    private static initDependencies() {
        
    }
}