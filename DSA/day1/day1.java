import java.util.ArrayList;
import java.util.Scanner;

public class day1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int k = scanner.nextInt();
        ArrayList<Integer> res = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                res.add(i);
            }
        }

        if (res.size() <= k) {
            System.out.println(res.get(0));
        } else {
            System.out.println(res.get(k));
        }
    }
}

