import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import { getTotalAmountBeforeDiscount } from "./utils.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = await InputView.readDate();
    const menu = await InputView.readMenu();
    OutputView.printBenefitHeader();
    OutputView.printMenu(menu);

    // const totalAmountBeforeDiscount = getTotalAmountBeforeDiscount(order);
    // OutputView.printTotalAmountBeforeDiscount(totalAmountBeforeDiscount);
  }
}

export default App;
