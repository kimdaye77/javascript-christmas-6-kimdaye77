import { Console } from "@woowacourse/mission-utils";

import { Order } from "./Order.js";

const InputView = {
  async readDate() {
    while (true) {
      const input = await Console.readLineAsync(
        "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
      );
      const date = Number(input, 10);
      try {
        if (!isNaN(date) && date >= 1 && date <= 31) {
          return date;
        }
        throw new Error(
          "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."
        );
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
  async readMenu() {
    while (true) {
      const orderBoard = new Order();
      const input = await Console.readLineAsync(
        "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)"
      );
      const order = input.split(",");

      for (let i = 0; i < order.length; i++) {
        const menu = order[i].trim();
        const [menuName, quantity] = menu.split("-").map((part) => part.trim());

        try {
          if (isNaN(Number(quantity)) || quantity < 1) {
            throw new Error(
              "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
            );
          }
          if (orderBoard.addMenuItem(menuName, quantity)) {
            throw new Error(
              "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
            );
          }

          //TODO: 형식 중복 예외처리
          //음료만 주문x
        } catch (error) {
          Console.print(error.message);
        }
      }
      return orderBoard; //TODO: 주문 저장 정리
    }
  },
};

export default InputView;
