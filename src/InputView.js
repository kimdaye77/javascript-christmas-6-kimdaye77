import { Console } from "@woowacourse/mission-utils";

const InputView = {
    async readDate() {
        while (true) {
            const input = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)");
            const date = parseInt(input, 10);
            try {
                if (!isNaN(date) && date >= 1 && date <= 31 ) {
                    return date;
                }
                throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.")
            }
            catch (error) {
                Console.print(error.message);
            }
        }
    }
}

export default InputView;