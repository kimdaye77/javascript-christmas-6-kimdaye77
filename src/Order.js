import { Menu } from "./Menu.js";

export class Order extends Menu {
  constructor() {
    super();
    this.orderItems = [];
    this.totalPrice = 0;
  }

  addMenuItem(name, cnt) {
    const menuItem = this.findMenuItem(name);
    this.orderItems.push({ menuItem, cnt });
    this.totalPrice += menuItem.price * cnt;
  }

  findMenuItem(name) {
    const categories = Object.keys(this);
    for (const category of categories) {
      const menuItems = this[category];
      const menuItem = menuItems.find((item) => item.name === name);
      if (menuItem) {
        return menuItem;
      }
    }
    return null;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}
