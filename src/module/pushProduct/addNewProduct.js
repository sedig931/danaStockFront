// const SERVER_URL = 'http://localhost:301';
const SERVER_URL = 'https://danastocks.netlify.app/api';

export const addProduct = async function (product) {
    try {
        // console.log('here in modle...',product);
        
        let added = {};
        await fetch(`${SERVER_URL}/items/push/item`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // mode: "no-cors",
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => added = data);
        return added;
    } catch (err) {
        throw err;
    }
}
export const getProduct = async function (sku) {
    try {
        let item = {};
        await fetch(`${SERVER_URL}/items/get/item/${sku}`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            // mode: "no-cors",
        })
        .then(res => res.json())
            .then(data => item = data);
        return item;
    } catch (err) {
        throw err;
    }
}

export const editProduct = async function (product) {
    try {
        // console.log(product);
        await fetch(`${SERVER_URL}/items/edit/item`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            ,
            body: JSON.stringify(product),
            // mode: "no-cors",
        });
    } catch (err) {
        throw err;
    }
}