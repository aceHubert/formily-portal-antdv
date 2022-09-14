export declare const hasSymbol: (key: string) => symbol;
export declare function isVnode(element: any): boolean;
export declare function isVueOptions(options: Record<string, any>): boolean;
export declare function composeExport<T0 extends {}, T1 extends {}>(s0: T0, s1: T1): T0 & T1;
export declare function isEmptyElement(c: any): boolean;
export declare function filterEmpty(children?: any[]): any[];
export declare const inBrowser: boolean;
export declare function warn(condition: boolean, format: string, ...args: any[]): void;
