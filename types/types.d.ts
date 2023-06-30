export interface CustomElementStatic extends CustomElementConstructor {
    "##props": any;
    props: any;
}
export declare type GetProps<CustomElement extends CustomElementStatic> = CustomElement extends {
    "##props": infer P;
} ? P : any;
