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
public class makingSupplier {
	
	public Connection jdbc_connection;
	public Statement statement;
	public String databaseName = "pharmac", tableName = "supplier", dataFile = "supplier.txt";
	
	// Students should configure these variables for their own MySQL environment
	// If you have not created your first database in mySQL yet, you can leave the 
	// "[DATABASE NAME]" blank to get a connection and create one with the createDB() method.
	public String connectionInfo = "jdbc:mysql://localhost:3306/pharmac",  
				  login          = "root",
				  password       = "password";

	public makingSupplier()
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
				     "SUPPLIER_NAME VARCHAR(255) NOT NULL, " +
				     "LOCATION VARCHAR(255) NOT NULL, " + 
				     "PHONE INTEGER, " + 
				     "PRIMARY KEY ( SUPPLIER_NAME ))";
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

	// Removes the data table from the database (and all the data held within it!)
	public void removeTable()
	{
		String sql = "DROP TABLE " + tableName;
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
			System.out.println("Removed Table " + tableName);
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
				addItem( new Supplier( 				toolInfo[0],
						                            toolInfo[1],
													Long.parseLong(toolInfo[2])));
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

	public void addItem(Supplier tool)
	{
		String sql = "INSERT INTO " + tableName +
				" VALUES ( " + tool.supplier_name + ", " + 
				tool.location + ", " + 
				tool.phone + ");";
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
		makingSupplier inventory = new makingSupplier();
		
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