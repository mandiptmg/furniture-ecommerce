import { StoreProduct } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
interface NextState {
  productData: StoreProduct[]
  userInfo: null | string
}

const initialState: NextState = {
  productData: [],
  userInfo: null,
}

export const nextSlice = createSlice({
  name: 'next',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existProduct = state.productData.find(
        (item: StoreProduct) => item.name === action.payload.name
      )
      if (existProduct) {
        existProduct.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    removeItem: (state, action) => {
       state.productData = state.productData.filter(
         (item: StoreProduct) => item.name !== action.payload
       )
    },
    resetItem: (state) => {
      state.productData = []
    },
    increaseProduct: (state, action) => {
      const existProduct = state.productData.find(
        (item: StoreProduct) => item.name === action.payload.name
      )
      existProduct && existProduct.quantity++
    },
    decreaseProduct: (state, action) => {
      const existProduct = state.productData.find(
        (item: StoreProduct) => item.name === action.payload.name
      )
      if (existProduct?.quantity === 1) {
        existProduct.quantity = 1
      } else {
        existProduct && existProduct.quantity--
      }
    },
    user: (state, action) => {
      state.userInfo = action.payload
    },
    removeUser: (state) => {
      state.userInfo = null
    },
  },
})

export const {
  addToCart,
  removeItem,
  resetItem,
  user,
  removeUser,
  increaseProduct,
  decreaseProduct,
} = nextSlice.actions
export default nextSlice.reducer
