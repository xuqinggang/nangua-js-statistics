export interface IExtraConf {
    [prop:string]: any,
};

export interface IService {
    baseConfig: {
        commonParamters?: {},
    };
    reqServer: (url: string, paramters: {[key: string]: any}, type: string, extraConf?: IExtraConf) => void;

    get: (url: string, paramters: {}, extraConf: IExtraConf) => void;

    post: (url: string, paramters: {}, extraConf: IExtraConf) => void;

    put: (url: string, paramters: {}) => void;

    delete: (url: string) => void;
}
