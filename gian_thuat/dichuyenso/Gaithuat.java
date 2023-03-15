public class Gaithuat {

    public static void main(String[] args) {
        int[] nums = {0, 1, 0, 3, 12};
        int[] result;
        result = sortArray(nums);
        for (Integer n : result
        ) {
            System.out.println(n);
        }
    }

    static public int[] sortArray(int[] number) {
        int a = 0;
        for (int j = 0; j < number.length; j++) {
            for (int i = 0; i < number.length - 1; i++) {
                if (number[i] == 0) {
                    a = number[i + 1];
                    number[i + 1] = number[i];
                    number[i] = a;
                }
            }
        }
        return number;
    }
}
