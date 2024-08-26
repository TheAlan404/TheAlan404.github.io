export interface BlogPost {
    id: string;
    title: string;
    desc: string;
    date: string;
    component: React.ComponentType<any>;
};
