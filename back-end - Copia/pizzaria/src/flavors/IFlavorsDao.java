/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package flavors;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Portal
 */
public class IFlavorsDao implements FlavorsDao {
    
    private ArrayList<Flavors> BANCO = new ArrayList<Flavors>();
	
    public IFlavorsDao() {

        Flavors f1 = new Flavors(1,"mussarela",5);
        Flavors f2 = new Flavors(2,"bacon com catupiry",7);
        Flavors f3 = new Flavors(3,"calabresa",6.50);
        Flavors f4 = new Flavors(4,"peperoni",7.50);
        Flavors f5 = new Flavors(4,"frango com catupiry",8.50);
        Flavors f6 = new Flavors(4,"carne seca com catupiry",8.50);
        Flavors f7 = new Flavors(4,"bacalhau",9);

        this.BANCO.add(f1);
        this.BANCO.add(f2);
        this.BANCO.add(f3);
        this.BANCO.add(f4);
        this.BANCO.add(f5);
        this.BANCO.add(f6);
        this.BANCO.add(f7);
        System.out.println("Instanciando banco" + this.BANCO);
    }
    
    /**
     *
     * @return
     * @throws InstantiationException
     * @throws IllegalAccessException
     * @throws ClassNotFoundException
     * @throws SQLException
     */
    @Override
    public ArrayList<Flavors> getAll() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
        return this.BANCO;
    }
    
}
