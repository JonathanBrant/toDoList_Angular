export interface Todo {
    done: boolean;
    text: string;
    priority?: Priority;
}

export enum Priority {
    alta=3,
    media=2,
    baixa=1,
}