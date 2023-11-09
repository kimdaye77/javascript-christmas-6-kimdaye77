class MenuItem {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

export class Menu {
  constructor() {
    this.appetizer = [
      new MenuItem("양송이수프", 6_000, "appetizer"),
      new MenuItem("타파스", 5_500, "appetizer"),
      new MenuItem("시저샐러드", 8_000, "appetizer"),
    ];
    this.main = [
      new MenuItem("티본스테이크", 55_000, "main"),
      new MenuItem("바비큐립", 54_000, "main"),
      new MenuItem("해산물파스타", 35_000, "main"),
      new MenuItem("크리스마스파스타", 25_000, "main"),
    ];
    this.dessert = [
      new MenuItem("초코케이크", 15_000, "dessert"),
      new MenuItem("아이스크림", 5_000, "dessert"),
    ];
    this.beverage = [
      new MenuItem("제로콜라", 3_000, "beverage"),
      new MenuItem("레드와인", 60_000, "beverage"),
      new MenuItem("샴페인", 25_000, "beverage"),
    ];
  }
}
