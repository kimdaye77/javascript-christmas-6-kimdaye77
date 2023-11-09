import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = await InputView.readDate();
    const menu = await InputView.readMenu();
  }
}

export default App;
