import { ReactNode } from "react"

export type AlertType = "alert-default" | "alert-info" | "alert-warning" | "alert-danger" | "alert-success"

export interface IAlert {
  type: AlertType,
  icon: ReactNode
  title:string,
  description?:string,
  children?:ReactNode
}