import type { Component, VNode } from 'vue';
export declare type SlotTypes = Component | string | number | ((props: Record<string, any>) => VNode[] | VNode) | VNode;
export declare type RemoteDataSource = {
    url: string;
    mapper: Record<string, string>;
};
