export default class Product {
    constructor(
        public id: number,
        public title: string,
        public descr: string,
        public price: number
    ) {}
}

export interface IProductChangableFields {
    title: string;
    descr: string;
    price: number;
}
