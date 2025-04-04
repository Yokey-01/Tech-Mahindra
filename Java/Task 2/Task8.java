import java.util.*;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
    public String toString() {
        return name + " ($" + salary + ")";
    }
}

public class Task8 {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("Virat", 40000),
                new Employee("Kohli", 60000),
                new Employee("ABD", 120001));

        double salaryThreshold = 60000;

        List<String> highSalaryEmployees = employees.stream()
                .filter(emp -> emp.getSalary() > salaryThreshold)
                .map(emp -> emp.getName().toUpperCase())
                .collect(Collectors.toList());
        System.out.println("Original Employee List:");
        employees.forEach(System.out::println);

        System.out.println("\n  High Salary Employees (Names in Uppercase):");
        highSalaryEmployees.forEach(System.out::println);
    }
}