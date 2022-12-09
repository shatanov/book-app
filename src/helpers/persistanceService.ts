export const set = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Error saving to LocalStorage", e);
    }
};

// export const get = (key: string) => {
//     try {
//         @ts-ignore
//         return JSON.parse(localStorage.getItem(key));
//     } catch (e) {
//         console.error("Error gating from LocalStorage", e);
//         return null;
//     }
// };
