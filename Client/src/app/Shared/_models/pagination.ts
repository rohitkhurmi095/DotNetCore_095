//Pagination
//===========
export interface Pagination {
    //CurrentPage
    currentPage:number;
    //ItemsperPage
    itemsPerPage:number;
    //TotalItems (No.of.Items in query)
    totalItems:number;
    //TotalPages
    totalPages:number;
}


//===================
//PAGINATED RESPONSE
//===================
//T = Type(Eg: Member[])
export class PaginatedResult<T>{
    result:T;
    pagination:Pagination;
}
