/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pizzaria;

import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Portal
 */
public interface FlavorsDao {
    
    //GET ALL
    public ArrayList<Flavors> getAll() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException;
    
}
