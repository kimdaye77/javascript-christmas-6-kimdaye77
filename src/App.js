import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { applyEvent } from "./eventUtils.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = await InputView.readDate();
    const orderBoard = await InputView.readMenu();
    OutputView.printBenefitHeader();
    OutputView.printMenu(orderBoard.orderItems);
    OutputView.printTotalPrice(orderBoard.getTotalPrice());
    OutputView.printGiftMenu(orderBoard.getTotalPrice());

    const eventList = applyEvent(
      date,
      orderBoard.orderItems,
      orderBoard.getTotalPrice()
    );

    OutputView.printBenefitList(eventList);
  }
}

export default App;
