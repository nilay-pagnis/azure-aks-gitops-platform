variable "subscription_id" {
  type = string
}

variable "location" {
  type    = string
  default = "centralindia"
}

variable "prefix" {
  type    = string
  default = "aksplat"
}

variable "node_vm_size" {
  type    = string
  default = "Standard_D2as_v5"
}