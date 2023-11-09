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
    for (const item of this.orderItems) {
      totalPrice += item.menuItem.price * item.cnt;
    }
    return totalPrice;
  }

  getMenuCount() {
    const menuCount = {};
    for (const item of this.orderItems) {
      if (menuCount[item.name]) {
        menuCount[item.name]++;
      } else {
        menuCount[item.name] = 1;
      }
    }
    return menuCount;
  }

  printOrderDetails() {
    console.log("주문 내역:");
    for (const item of this.orderItems) {
      console.log(`${item.name} - ${item.price}원`);
    }
    console.log(`총 가격: ${this.getTotalPrice()}원`);
    console.log("메뉴별 개수:");
    const menuCount = this.getMenuCount();
    for (const name in menuCount) {
      console.log(`${name}: ${menuCount[name]}개`);
    }
  }
}
