import { MENU } from "./constants.js";

export function getMenuNames() {
  const menuNames = [];

  for (const category in MENU) {
    const menuItems = MENU[category];
    for (const menuItem of menuItems) {
      menuNames.push(menuItem.name);
    }

    return menuNames;
  }
}
