class Car {
    private String brand;
    private String model;
    private int year;

    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    String getBrand() {
        return brand;
    }

    String getModel() {
        return model;
    }

    int getYear() {
        return year;
    }

    public void display() {
        System.out.println("Brand: " + brand + " ," + "Model : " + model);
    }

}
public class Task3{
    public static void main(String []a){
        Car object1=new Car("Ford","Mustang",1969);
        Car object2=new Car("Maruti","Breeza",2024);

        object1.display();
        object2.display();

    }
}
