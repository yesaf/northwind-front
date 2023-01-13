import { ReactElement } from 'react';

export type Response<T> = {
    status: string,
    data: {
        sqlString: string,
        data: T[],
    },
}

type RowCount = {
    rowCount: number,
}

export type RowCountResponse = Response<RowCount>;

export type Supplier = {
    _avatar?: ReactElement,
    "Id": number,
    "Company": string,
    "Contact": string,
    "Title": string,
    "City": string,
    "Country": string,
}

export type SupplierWithDetails = Supplier & {
    "Address": string,
    "Region": string,
    "Postal Code": string,
    "Phone": string,
}

export type Product = {
    "Id": number,
    "Name": string,
    "Qt per unit": string,
    "Price": number,
    "Stock": number,
    "Orders": number
}

export type ProductWithDetails = {
    "Id": number,
    "ProductName": string,
    "SupplierId": number,
    "Supplier": string,
    "Quantity per unit": string,
    "Unit price": number,
    "Units in stock": number,
    "Units on order": number,
    "Reorder level": number,
    "Discontinued": number,
}

export type Order = {
    "Id": number,
    "Total Price": number,
    "Products": number,
    "Quantity": number,
    "Shipped": string,
    "Ship Name": string,
    "City": string,
    "Country": string,
}

export type Employee = {
    _avatar?: ReactElement,
    "Id": number,
    "Name": string,
    "Title": string,
    "City": string,
    "Phone": string,
    "Country": string,
}

export type Customer = {
    "Id": string,
    "Company": string,
    "Contact": string,
    "Title": string,
    "City": string,
    "Country": string
}

