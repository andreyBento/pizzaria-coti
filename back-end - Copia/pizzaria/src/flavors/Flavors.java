/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package flavors;

/**
 *
 * @author Portal
 */
public class Flavors {
    public int id;
    public String name;
    public double price;
    
    public Flavors(int id, String name, double price){
        super();
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    
    public static void main(String args[]){
        System.out.println("Trabalho da Coti");
    }
            
}
