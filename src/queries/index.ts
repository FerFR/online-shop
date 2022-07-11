import { api } from './api';

export const homeQuery = async () => {
    const { data } = await api.get('/products');
    return data;
};

export const categoriesQuery = async () => {
    const { data } = await api.get('/categories');
    return data;
};
export const searchQuery = async ({ queryKey }: any) => {
    const [_key, { search }] = queryKey;

    if (search) {
        const { data } = await api.get(`/products?q=${search}`);
        return data;
    } else {
        const { data } = await api.get(`/products`);
        return data;
    }
};

export const productQuery = async ({ queryKey }: any) => {
    const [_key, { id }] = queryKey;
    const { data } = await api.get('/products/' + id);
    return data;
};
