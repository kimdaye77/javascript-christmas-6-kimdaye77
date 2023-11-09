import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printWelcome();
    const date = InputView.readDate();
  }
}

export default App;
