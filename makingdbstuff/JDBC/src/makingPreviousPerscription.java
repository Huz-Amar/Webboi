import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

// Lab 10 - In Lab Exercise 1

// This program allows you to create and manage a store inventory database.
// It creates a database and datatable, then populates that table with tools from
// items.txt.
public class makingPreviousPerscription {
	
	public Connection jdbc_connection;
	public Statement statement;
	public String databaseName = "pharmac", tableName = "previous_perscription", dataFile = "previous_perscription.txt";
	
	// Students should configure these variables for their own MySQL environment
	// If you have not created your first database in mySQL yet, you can leave the 
	// "[DATABASE NAME]" blank to get a connection and create one with the createDB() method.
	public String connectionInfo = "jdbc:mysql://localhost:3306/pharmac",  
				  login          = "root",
				  password       = "password";

	public makingPreviousPerscription()
	{
		try{
			// If this throws an error, make sure you have added the mySQL connector JAR to the project
			Class.forName("com.mysql.jdbc.Driver");
			
			// If this fails make sure your connectionInfo and login/password are correct
			jdbc_connection = DriverManager.getConnection(connectionInfo, login, password);
			System.out.println("Connected to: " + connectionInfo + "\n");
		}
		catch(SQLException e) { e.printStackTrace(); }
		catch(Exception e) { e.printStackTrace(); }
	}
	
	// Create a data table inside of the database to hold tools
	public void createTable()
	{
		String sql = "CREATE TABLE " + tableName + "(" +
				     "C_ID INT NOT NULL, " +
				     "P_ID INT(4) NOT NULL, " + 
				     "DATE_PERSCRIBED VARCHAR(255) NOT NULL, " + 
				     "COND_NAME VARCHAR(255) NOT NULL, " + 
				     "RESULT VARCHAR(255), " + 
				     "PRIMARY KEY ( C_ID, P_ID ))";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
			System.out.println("Created Table " + tableName);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}

	// Fills the data table with all the tools from the text file 'items.txt' if found
	public void fillTable()
	{
		try{
			Scanner sc = new Scanner(new FileReader(dataFile));
			while(sc.hasNext())
			{
				String toolInfo[] = sc.nextLine().split(";");
				addItem( new Previous_Perscription( 			Integer.parseInt(toolInfo[0]),
																Integer.parseInt(toolInfo[1]),
																		toolInfo[2],
																		toolInfo[3],
						                            					toolInfo[4]));
			}
			sc.close();
		}
		catch(FileNotFoundException e)
		{
			System.err.println("File " + dataFile + " Not Found!");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

	public void addItem(Previous_Perscription tool)
	{
		String sql = "INSERT INTO " + tableName +
				" VALUES ( " + tool.c_id + ", " + 
				tool.p_id + ", " + 
				tool.date_perscribed + ", " + 
				tool.cond_name + ", " + 
				tool.result + ");";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public static void main(String args[])
	{
		makingPreviousPerscription inventory = new makingPreviousPerscription();
		
		// You should comment this line out once the first database is created (either here or in MySQL workbench)
		//inventory.createDB();

		inventory.createTable();
		
		System.out.println("\nFilling the table with tools");
		inventory.fillTable();

//		System.out.println("\nTrying to remove the table");
//		inventory.removeTable();
		
		try {
			inventory.statement.close();
			inventory.jdbc_connection.close();
		} 
		catch (SQLException e) { e.printStackTrace(); }
		finally
		{
			System.out.println("\nThe program is finished running");
		}
	}
}