public class Task{
    public static void main(String []args){
        int num=10;
        double num2=17.8;
        boolean value=true;
        char Val='T';

        int sum=num+9;
        double product=num2*0.2;

        boolean check=num<num2;
        boolean condition=(num<num2) && (num2>num);

        System.out.println("Integer: " + num);
        System.out.println("Double: " + num2);
        System.out.println("Character: " + Val);
        System.out.println("Boolean: " + value);
        System.out.println("Sum (num + 9): " + sum);
        System.out.println("Product (num2 * 0.2): " + product);
        System.out.println("Num less than Num2 is " + check);

    }
}