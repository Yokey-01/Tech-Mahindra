import java.util.*;
public class Task4 {
    public static void main(String[] args) {
        ArrayList<String> products = new ArrayList<>();
        products.add("Headphones");
        products.add("Mouse");
        products.add("Keyboard");
        products.add("Headphones");
        products.add("Mouse");
        products.add("CPU");
        System.out.println(products);
        HashSet<String> finalProducts = new HashSet<>(products);
        System.out.println(finalProducts);
        finalProducts.remove("Headphones");
        System.out.println( finalProducts);

    }}