export type TestAction = {
    requestData: boolean;
};

export interface Action {
    type?: string;
    payload?: {};
    params?: {};
}

export type RootState = {
    readonly requestData: boolean;
    readonly isLoading: boolean;
    readonly page: number;
    readonly data: {
        readonly id: number;
        readonly title: string;
        readonly conferences: Array<string>;
        readonly tags: Array<string>;
    };
};
