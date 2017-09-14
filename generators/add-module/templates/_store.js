// @flow
import { observable, action } from 'mobx'

export default new class <%= storeName %> {
  @observable list: Array<any> = []
  
  @action addItem = (item: any) => this.list.push(item)
  @action removeItem = (item: any) => this.list.replace(this.list.filter(someItem => someItem === item))
}