import BaseService from './BaseService';
import { AxiosResponse } from 'axios';
import {
    Product, Supplier, Response, Order, Employee, Customer,
    SupplierWithDetails, ProductWithDetails, OrderWithDetailsResponse, CustomerWithDetails,
} from '../types/ServerResponses';

export class SuppliersService extends BaseService {
    constructor() {
        super('https://northwind-express.onrender.com/suppliers/');
    }

    getSuppliers(params: { limit: number, page: number }): Promise<AxiosResponse<Response<Supplier>>> {
        return this.get(params);
    }

    getSupplierById(id: string): Promise<AxiosResponse<Response<SupplierWithDetails>>> {
        return this.getById(id);
    }
}

export class ProductsService extends BaseService {
    constructor() {
        super('https://northwind-express.onrender.com/products/');
    }

    getProducts(params: { limit: number, page: number }): Promise<AxiosResponse<Response<Product>>> {
        return this.get(params);
    }

    getProductById(id: string): Promise<AxiosResponse<Response<ProductWithDetails>>> {
        return this.getById(id);
    }
}

export class OrdersService extends BaseService {
    constructor() {
        super('https://northwind-express.onrender.com/orders/');
    }

    getOrders(params: { limit: number, page: number }): Promise<AxiosResponse<Response<Order>>> {
        return this.get(params);
    }

    getOrderById(id: string): Promise<AxiosResponse<OrderWithDetailsResponse>> {
        return this.getById(id);
    }
}

export class EmployeesService extends BaseService {
    constructor() {
        super('https://northwind-express.onrender.com/employees/');
    }

    getEmployees(params: { limit: number, page: number }): Promise<AxiosResponse<Response<Employee>>> {
        return this.get(params);
    }

    getEmployeeById(id: string): Promise<AxiosResponse<Response<Employee>>> {
        return this.getById(id);
    }
}

export class CustomersService extends BaseService {
    constructor() {
        super('https://northwind-express.onrender.com/customers/');
    }

    getCustomers(params: { limit: number, page: number }): Promise<AxiosResponse<Response<Customer>>> {
        return this.get(params);
    }


    getCustomerById(id: string): Promise<AxiosResponse<Response<CustomerWithDetails>>> {
        return this.getById(id);
    }
}

