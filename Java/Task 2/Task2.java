import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Task2 {
    public static int divide(int a,int b) {
        try {
            return a/b;
        } catch (ArithmeticException e) {
            System.out.println("Can't' divide by zero");
            return 0;
        } finally {
            System.out.println("division completed.");
        }
    }

    public static void openFile(String path) throws IOException {
        File file = new File(path);
        if (!file.exists()) {
            throw new FileNotFoundException("File not found at " + path);
        }
        System.out.println("File opened: " + path);
    }

    public static void main(String[] args) {
        System.out.println("Final Result: " + divide(10, 2));
        System.out.println("Final Result: " + divide(10, 0));
        try {
            openFile("C:/Users/yokey/OneDrive/Documents/Api key.txt");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        try {
            openFile("C:/Users/yokey/OneDrive/Documents/Api key.txt");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}