export interface RouterInterface {  // 路由相关接口
    match: {
        url: string
    };
    history:{
        push:(path:string) => void;
    }
}