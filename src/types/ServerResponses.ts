import { ReactElement } from 'react';

export type Response<T> = {
    status: string,
    data: {
        sqlString: string,
        ts: string,
        servedBy: string,
        duration: number,
        data: T[],
    },
}

type RowCount = {
    RowCount: number,
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
    "Total Price": number | string,
    "Products": number,
    "Quantity": number,
    "Shipped": string,
    "Ship Name": string,
    "City": string,
    "Country": string,
}

export type OrderWithDetails = {
    "Id": number,
    "Customer Id": string,
    "Ship Name": string,
    "Total Products": number,
    "Total Quantity": number,
    "Total Price": number,
    "Total Discount": number,
    "Ship Via": string,
    "Freight": number,
    "Order Date": string,
    "Required Date": string,
    "Shipped Date": string,
    "Ship City": string,
    "Ship Region": string,
    "Ship Postal Code": string,
    "Ship Country": string
}

type OrderInfo = {
    sqlString: string,
    ts: string,
    servedBy: string,
    duration: number,
    data: OrderWithDetails[],
}

export type ProductInOrder = {
    "Id": number,
    "ProductId": number,
    "Product": string,
    "Quantity": number,
    "Order Price": number,
    "Total Price": number,
    "Discount": number
}

type ProductsInOrder = {
    sqlString: string,
    ts: string,
    servedBy: string,
    duration: number,
    data: ProductInOrder[],
}

export type OrderWithDetailsResponse = {
    status: string,
    orderInformation: OrderInfo,
    productsInOrder: ProductsInOrder,
};

export type Employee = {
    _avatar?: ReactElement,
    "Id": number,
    "Name": string,
    "Title": string,
    "City": string,
    "Phone": string,
    "Country": string,
}

export type EmployeeWithDetails = {
    "Id": number,
    "Name": string,
    "Title": string,
    "Title Of Courtesy": string,
    "Birth Date": string,
    "Hire Date": string,
    "Address": string,
    "City": string,
    "Postal Code": string,
    "Country": string,
    "Home Phone": string,
    "Extension": string,
    "Notes": string,
    "ReportsToId": number,
    "Reports To": string
}

export type Customer = {
    "Id": string,
    "Company": string,
    "Contact": string,
    "Title": string,
    "City": string,
    "Country": string
}

export type CustomerWithDetails = {
    "Id": string,
    "Company Name": string,
    "Contact Name": string,
    "Contact Title": string,
    "Address": string,
    "City": string,
    "Postal Code": string,
    "Region": string,
    "Country": string,
    "Phone": string,
    "Fax": string
}

export type ProductSearchResult = {
    "Id": number,
    "Name": string,
    "Qt per unit": string,
    "Price": number,
    "Stock": number,
}

export type CustomerSearchResult = {
    "Id": string,
    "Name": string,
    "Contact": string,
    "Title": string,
    "Phone": string,
}
