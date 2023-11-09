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
      Console.print(`${menu[0]} ${menu[1]}개`);
    });
  },
};

export default OutputView;
