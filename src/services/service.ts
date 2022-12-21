export const service = {
    getAllCategories,
    getBook,
};
const url = " http://localhost:3000";

import { IBook } from "../types/book.interface";

function getAllCategories() {
    return fetch(`${url}/categories`).then((response) => response.json());
}

function getBook(id: number) {
    return fetch(`${url}/books`)
        .then((response) => response.json())
        .then((data) => data.find((book: IBook) => book.id === id));
}
