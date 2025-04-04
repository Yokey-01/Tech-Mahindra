import java.util.Scanner;
import java.util.HashMap;

public class Task1{
    public static void main(String []args){
        Scanner scanner=new Scanner(System.in);
        HashMap<String,Double> prices=new HashMap<>();
        int sales=200;
        prices.put("Milk", 20.0);
        prices.put("Cookies", 30.0);
        prices.put("Milkshake", 40.0);

        int choice;
        while(true){
            System.out.println("!.Check Price 2.Calculate Sales Total 3.Convert Units 4.Exit");
            System.out.println("Enter Your Choice");
            int value=scanner.nextInt();
            switch (value) {
                case 1:
                    System.out.println(prices);
                    break;
                case 2:
                    System.out.println(sales);
                case 3:
                    System.out.println("Enter grams");
                    int grams=scanner.nextInt();
                    System.out.println("Kg:"+grams/1000);
                    break;
                case 4:
                    System.out.println("Exiting... Thank you!");
                    return;
                default:
                    break;
            }
            scanner.close();
        }
    }
}
