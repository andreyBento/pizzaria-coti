/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pizzaria;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

/**
 *
 * @author Portal
 */

public class ConnectionBD {
    protected java.sql.Connection con;
    public ConnectionBD() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException{
    }

    public void open() throws SQLException{
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/LAPTOP-6HBQMMDD?serverTimezone=UTC&useSSL=false","root", "root");
    }

    public void close() throws SQLException{
            con.close();
    }
}
