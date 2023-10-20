import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const OrderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        addOrder: (state, action) => {
            const order = action.payload;
            order.id = uuid();
            state.push(order);
        }
    },
});

export const { addOrder } = OrderSlice.actions;
export default OrderSlice.reducer;