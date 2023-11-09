import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { getTotalAmountBeforeDiscount } from "./utils.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = await InputView.readDate();
    const orderBoard = await InputView.readMenu();
    OutputView.printBenefitHeader();
    OutputView.printMenu(orderBoard.orderItems);
    OutputView.printTotalPrice(orderBoard.getTotalPrice());
    OutputView.printGiftMenu(orderBoard.getTotalPrice());
  }
}

export default App;
