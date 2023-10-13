
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateGraphqlInput {
    description: string;
    price: number;
    title: string;
}

export interface FilteringInput {
    field?: Nullable<string>;
    keyword?: Nullable<string>;
}

export interface PaginationInput {
    skip: number;
    take: number;
}

export interface PostGraphqlInput {
    comment: string;
    owner: string;
    title: string;
}

export interface SortingInput {
    field?: Nullable<string>;
    order?: Nullable<number>;
}

export interface IMutation {
    createPost(creatPost: PostGraphqlInput): Nullable<string> | Promise<Nullable<string>>;
    createProduct(createGraphqlInput: CreateGraphqlInput): string | Promise<string>;
    deleteProductById(deleteId: number): Nullable<string> | Promise<Nullable<string>>;
    filterpost(filter: FilteringInput, pagination: PaginationInput, sorting: SortingInput): PostGraphqlOutput[] | Promise<PostGraphqlOutput[]>;
    updateProductById(createGraphqlInput: CreateGraphqlInput, updateId: number): Nullable<string> | Promise<Nullable<string>>;
}

export interface PostGraphqlOutput {
    comment: string;
    owner: string;
    title: string;
}

export interface Product {
    description: string;
    price: number;
    title: string;
}

export interface IQuery {
    findProductById(id: number): Nullable<Product[]> | Promise<Nullable<Product[]>>;
    postAll(): PostGraphqlOutput[] | Promise<PostGraphqlOutput[]>;
    productAll(): Product[] | Promise<Product[]>;
    productFilterQuery(filter: FilteringInput, pagination: PaginationInput, sorting: SortingInput): Nullable<Product[]> | Promise<Nullable<Product[]>>;
}

type Nullable<T> = T | null;
