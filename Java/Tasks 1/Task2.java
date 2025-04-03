import java.util.Scanner;

public class Task2 {
    public static void main(String []args){
        Scanner scanner=new Scanner(System.in);
        System.out.print("Enter stock : ");
        int stock = scanner.nextInt();

        if(stock<50){
            System.out.println("Stock Level is Low");
        } else if (stock<=200) {
            System.out.println("Stock Level is Medium");
        }else {
            System.out.println("Stock Level is High");
        }

        System.out.println("Skipping 5 in Numbers 1-10");
        for(int i=1;i<=10;i++){
            if(i==5){
                continue;
            }
            System.out.print(i +" ");
        }
        System.out.println();
        int num=1;
        while(true){
            num+=10;
            if(num>=100){
                break;
            }

        }
        System.out.println(num);
    }
}
