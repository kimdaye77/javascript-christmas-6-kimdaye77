import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printWelcome() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  printBenefitHeader() {
    Console.print("12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!");
  },
  printMenu(order) {
    Console.print("<주문 메뉴>");
    order.forEach((menu) => {
      Console.print(`${menu.menuItem.name} ${menu.cnt}개`);
    });
  },
  printTotalPrice(totalPrice) {
    Console.print("<할인 전 총주문 금액>");
    Console.print(`${totalPrice.toLocaleString()}원`);
  },
  printGiftMenu(totalPrice) {
    Console.print("<증정 메뉴>");
    if (totalPrice >= 120_000) {
      Console.print("샴페인 1개");
      return;
    }
    Console.print("없음");
  },
  printBenefitList(eventList) {
    Console.print("<혜택 내역>");
    if (eventList.length === 0) {
      Console.print("없음");
      return;
    }
    eventList.forEach((event) =>
      Console.print(`${event[0]}: -${event[1].toLocaleString()}원`)
    );
  },
  printTotalBenefitPrice(discount) {
    Console.print("<총혜택 금액>");
    Console.print(`-${discount.toLocaleString()}원`);
  },
  printTotalPriceAfterDiscount(price) {
    Console.print("<할인 후 예상 결제 금액>");
    Console.print(`-${price.toLocaleString()}원`);
  },
  printEventBadge(discount) {
    let badge = "없음";
    Console.print("<12월 이벤트 배지>");
    switch (discount) {
      case 5_000:
        badge = "별";
        break;
      case 10_000:
        badge = "트리";
        break;
      case 20_000:
        badge = "산타";
        break;
      default:
        Console.print(badge);
        break;
    }
  },
};

export default OutputView;
