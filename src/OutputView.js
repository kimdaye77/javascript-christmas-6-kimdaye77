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
};

export default OutputView;
