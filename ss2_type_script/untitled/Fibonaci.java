public class Fibonaci {

    public static int fibonacciRecursive(int n) {
        if (n <= 1) {
            return n;
        }
            return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
    public static void main(String[] args) {
        int n = 4;
        for (int i = 0; i < n; i++) {
            System.out.print(fibonacciRecursive(i) + " ");
        }
    }
}
