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
public class makingClients {
	
	public Connection jdbc_connection;
	public Statement statement;
	public String databaseName = "pharmac", tableName = "client", tableName2 = "adult", tableName3 = "minor", tableName4 = "treats", dataFile = "Client.txt", dataFile2 = "adult.txt"
				,dataFile3 = "minor.txt", dataFile4 = "treats.txt";
	
	// Students should configure these variables for their own MySQL environment
	// If you have not created your first database in mySQL yet, you can leave the 
	// "[DATABASE NAME]" blank to get a connection and create one with the createDB() method.
	public String connectionInfo = "jdbc:mysql://localhost:3306/pharmac",  
				  login          = "root",
				  password       = "password";

	public makingClients()
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
				     "CLIENT_ID INT NOT NULL, " +
				     "CLIENT_NAME VARCHAR(50) NOT NULL, " + 
				     "AGE INTEGER NOT NULL, " + 
				     "SEX CHAR(1) NOT NULL, " + 
				     "WEIGHT VARCHAR(255) NOT NULL, " + 
				     "ADDRESS VARCHAR(255) , " + 				     
				     "PHONE INTEGER NOT NULL, " + 
				     "PRIMARY KEY ( CLIENT_ID, CLIENT_NAME ))";
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

	public void createTable2()
	{
		String sql = "CREATE TABLE " + tableName2 + "(" +
				     "C_ID INT NOT NULL, " +
				     "LEVEL_OF_ACTIVITY VARCHAR(100) NOT NULL, " + 
				     "PRIMARY KEY ( C_ID ))";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
			System.out.println("Created Table " + tableName2);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public void createTable3()
	{
		String sql = "CREATE TABLE " + tableName3+ "(" +
				     "MINOR_CLIENT_ID INT NOT NULL, " +
				     "ADULT_CLIENT_ID INT NOT NULL, " +
				     "RELATIONSHIP VARCHAR(100) NOT NULL, " + 
				     "PRIMARY KEY ( MINOR_CLIENT_ID ))";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
			System.out.println("Created Table " + tableName3);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public void createTable4()
	{
		String sql = "CREATE TABLE " + tableName4+ "(" +
				     "C_ID INT NOT NULL, " +
				     "COND_NAME VARCHAR(255) NOT NULL, " +
				     "P_ID INTEGER(4) NOT NULL, " + 
				     "PRIMARY KEY ( C_ID ))";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
			System.out.println("Created Table " + tableName3);
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
				addItem( new Client( 						Integer.parseInt(toolInfo[0]),
																			toolInfo[1],
															Integer.parseInt(toolInfo[2]),
																			toolInfo[3],
																			Double.parseDouble(toolInfo[4]),
																			toolInfo[5],
																			Integer.parseInt(toolInfo[6])));
						                 
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

	public void addItem(Client tool)
	{
		String sql = "INSERT INTO " + tableName +
				" VALUES ( " + tool.client_id + ", " + 
							tool.client_name + ", " + 
							tool.age + ", " + 
							tool.sex + ", " + 
							tool.weight + ", " + 
							tool.address + ", " + 
							tool.number + ");";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public void fillTable2()
	{
		try{
			Scanner sc = new Scanner(new FileReader(dataFile2));
			while(sc.hasNext())
			{
				String toolInfo[] = sc.nextLine().split(";");
				addItem2( new Adult( 						Integer.parseInt(toolInfo[0]),
																			toolInfo[1]));
						                 
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

	public void addItem2(Adult tool)
	{
		String sql = "INSERT INTO " + tableName2 +
				" VALUES ( " + tool.id + ", " + 
							tool.levelofactivity + ");";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public void fillTable3()
	{
		try{
			Scanner sc = new Scanner(new FileReader(dataFile3));
			while(sc.hasNext())
			{
				String toolInfo[] = sc.nextLine().split(";");
				addItem3( new Minor( 						Integer.parseInt(toolInfo[0]),
															Integer.parseInt(toolInfo[1]),
																			toolInfo[2]));
						                 
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

	public void addItem3(Minor tool)
	{
		String sql = "INSERT INTO " + tableName3 +
				" VALUES ( " + tool.minorclientid + ", " + 
								tool.adultclientid + ", " + 
							tool.relationship + ");";
		try{
			statement = jdbc_connection.createStatement();
			statement.executeUpdate(sql);
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}
	
	public void fillTable4()
	{
		try{
			Scanner sc = new Scanner(new FileReader(dataFile4));
			while(sc.hasNext())
			{
				String toolInfo[] = sc.nextLine().split(";");
				addItem4( new Treats( 						Integer.parseInt(toolInfo[0]),
															toolInfo[1],
															Integer.parseInt(toolInfo[2])));
						                 
			}
			sc.close();
		}
		catch(FileNotFoundException e)
		{
			System.err.println("File " + dataFile4 + " Not Found!");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

	public void addItem4(Treats tool)
	{
		String sql = "INSERT INTO " + tableName4 +
				" VALUES ( " + tool.c_id + ", " + 
								tool.cond_name + ", " + 
							tool.p_id + ");";
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
		makingClients inventory = new makingClients();
		
		// You should comment this line out once the first database is created (either here or in MySQL workbench)
		//inventory.createDB();

//		inventory.createTable();
//		inventory.createTable2();
//		inventory.createTable3();
		inventory.createTable4();
		
		System.out.println("\nFilling the table with tools");
//		inventory.fillTable();
//		inventory.fillTable2();
//		inventory.fillTable3();
		inventory.fillTable4();

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