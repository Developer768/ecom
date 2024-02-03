export type StatesType = {
    id: string
    name: string
}
export type CountiesType = {
    id: string,
    name: string,
    orderPrice: string,
    shippingCost: string,
    StateId: string,
    state: StatesType
  }