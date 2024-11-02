export interface DatabaseConfig {
    host: string;
    port: number;
    uri: string;
}
export declare const database_config: () => {
    database: {
        host: string;
        port: number;
        uri: string;
    };
};
