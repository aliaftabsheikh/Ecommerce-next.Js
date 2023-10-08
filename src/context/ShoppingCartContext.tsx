"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Image } from "sanity"
import { AnyARecord } from "dns"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  _id: number
  quantity: number,
  image: Image ,
  price: number ,
  title: string,
  tags: string
}




type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: ({_id, image, price, tags, title}: CartItem) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    []
  )


  console.log("CARTITEMMSSSCONTEXT",cartItems);
  
  

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )


  console.log("CARTQUANTITY", cartQuantity);
  
  

  
  function getItemQuantity(id: number) {
        
    return cartItems.find(item => item._id === id)?.quantity || 0
  }

  function increaseCartQuantity({_id, image, price, tags, title}: CartItem) {
    setCartItems(currItems => {
      if (currItems.find(item => item._id === _id) == null) {
        return [...currItems, { _id: _id, quantity: 1, image, price, tags, title }]
      } else {
        return currItems.map(item => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: any) {
    setCartItems(currItems => {
      if (currItems.find(item => item._id === id)?.quantity === 1) {
        return currItems.filter(item => item._id !== id)
      } else {
        return currItems.map(item => {
          if (item._id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }


  function removeFromCart(id: any) {
    setCartItems(currItems => {
      return currItems.filter(item => item._id !== id)
    })
  }

  

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}