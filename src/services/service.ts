export const service = {
    getAllCategories,
};
const url = " http://localhost:3000";

function getAllCategories() {
    return fetch(`${url}/categories`).then(response => response.json());
}
