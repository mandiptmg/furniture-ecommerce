
export interface NavbarProps {
  name?: string
  url: string
  icon?: JSX.Element
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

}

export interface BLogProps{
  title:string,
  desc:string,
  image:string,
  author:string,
  date:string
}