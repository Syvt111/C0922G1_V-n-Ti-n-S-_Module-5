import java.util.ArrayList;
import java.util.List;

public class FindCoins {
    public static void main(String[] args) {
        int[] coins = { 1,5,4};
        int amount = 18;
        System.out.println(findCoins(coins, amount));
    }
    static public int findCoins(int[] coins, int amount) {
        List<Integer> list = new ArrayList<>();
        int a;
        int b;
        int c;

        for (int i = 0; i < coins.length; i++) {
            a = amount % coins[i];
            if (a == 0) {
                list.add(amount / coins[i]);
            }
            for (int j = 0; j < coins.length; j++) {
                if (coins[i] != coins[j]) {
                    b = a % coins[j];
                    if (b == 0) {
                        list.add((amount - a) / coins[i] + a / coins[j]);
                    }
                    for (int k = 0; k < coins.length; k++) {
                        if (coins[j] != coins[k]) {
                            c = b % coins[k];
                            if (c == 0) {
                                list.add((amount - a) / coins[i] + (a - b) / coins[j] + b / coins[k]);
                            }
                        }

                    }
                }
            }
        }
        int min;
        if (list.size() != 0) {
            min = list.get(0);
            for (int i = 1; i < list.size(); i++
            ) {
                if (list.get(i) < min) {
                    min = list.get(i);
                }
            }
        } else {
            min = -1;
        }
        return min;
    }
}
