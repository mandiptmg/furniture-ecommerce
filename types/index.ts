import { IconType } from "react-icons"

export interface NavbarProps {
  name?: string
  url: string
  icon?:IconType
}

export interface EmployeeProps {
  name: string
  position: string
  image: string
  description: string
}

export interface FeaturesProps{
  name:string,
  desc:string,
  icon:any
}
 
export interface LeatherChairProps {
  img: string
  price: number
  name: string
  description?:string

}
export interface StoreProduct {
  img: string
  price: number
  name: string
  quantity:number
}

export interface BLogProps{
  title:string,
  desc:string,
  image:string,
  author:string,
  date:string
}
export interface StateProps {
  productData: []
  userInfo: null | string
  next: any
}