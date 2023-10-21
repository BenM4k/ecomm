import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import apiSlice from '../../api/apiSlice';
import { v4 as uuid } from "uuid";
import phone from '../../../assets/pngimg.com - iphone_14_PNG24.png';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            transformResponse: (res) => {
                const products = res?.map((product) => {
                    if (!product.id) product.id = uuid();
                    if (!product.img) product.img = phone;
                    return product;
                });
                return productsAdapter.setAll(initialState, products);
            },
            providesTags: (result) => [
                { type: 'product', id: 'LIST' },
                ...result?.ids?.map((id) => ({ type: 'product', id})),
            ],
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: {
                  ...product,
                  id: uuid(),
                },
              }),
              invalidatesTags: [
                { type: 'product', id: 'LIST' },
              ],
        }),
        deleteProduct: builder.mutation({
            query: ({ id }) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                body: { id },
              }),
            invalidatesTags: (arg) => [
            { type: 'product', id: arg.id },
            ],
        })
    }),
});

export const {
    useAddProductMutation,
    useDeleteProductMutation,
    useGetProductsQuery
} = productApiSlice;

export const selectProductsResult = productApiSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
    selectProductsResult,
    (productResult) => productResult.data,
)

export const {
    selectAll: selectAllProducts,
} = productsAdapter.getSelectors((store) => selectProductsData(store) ?? initialState )
