export function applyEvent(date, order, totalPrice) {
  //TODO: let 최소화
  let discount = 0;
  const eventList = [];
  //TODO: 매직넘버
  let christmasDDayDiscount = 0;
  let weekDayDiscount = 0;
  let weekendDiscount = 0;
  let specialDiscount = 0;
  let giftMenuEvent = 0;
  if (date <= 25) {
    christmasDDayDiscount += (date - 1) * 100 + 1000;
    eventList.push(["크리스마스 디데이 할인", christmasDDayDiscount]);
    discount += christmasDDayDiscount;
  }
  //TODO: 나중에 상수배열로 빼기
  //주말
  if (date % 7 === 1 || date % 7 === 2) {
    order.forEach((menu) => {
      if (menu.menuItem.category === "main") {
        weekendDiscount += menu.cnt * 2_023;
      }
    });
    eventList.push(["주말 할인", weekendDiscount]);
    discount += weekendDiscount;
  }
  //평일
  if (date % 7 in [4, 5, 6, 0]) {
    order.forEach((menu) => {
      if (menu.menuItem.category === "dessert") {
        weekDayDiscount += menu.cnt * 2_023;
      }
    });
    eventList.push(["평일 할인", weekDayDiscount]);
    discount += weekDayDiscount;
  }
  //스페셜
  if (date % 7 === 3 || date === 25) {
    specialDiscount += 1000;
    eventList.push(["특별 할인", specialDiscount]);
    discount += specialDiscount;
  }
  if (totalPrice >= 120_000) {
    giftMenuEvent += 25_000;
    eventList.push(["증정 이벤트", giftMenuEvent]);
    discount += giftMenuEvent;
  }

  return { eventList, discount };
}
