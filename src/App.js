import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { applyEvent } from "./eventUtils.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = await InputView.readDate();
    const orderBoard = await InputView.readMenu();
    OutputView.printBenefitHeader();
    const orderItems = orderBoard.orderItems;
    const totalPrice = orderBoard.getTotalPrice();
    OutputView.printMenu(orderItems);
    OutputView.printTotalPrice(totalPrice);
    OutputView.printGiftMenu(totalPrice);

    const { eventList, discount } = applyEvent(date, orderItems, totalPrice);

    OutputView.printBenefitList(eventList);
    OutputView.printTotalBenefitPrice(discount);
    OutputView.printTotalPriceAfterDiscount(totalPrice - discount);
    OutputView.printEventBadge(discount);
  }
}

export default App;
