# sql-select-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is SQL and how is it different from languages like JavaScript?
  SQL is a domain-specific language used for managing and manipulating relational database systems. It's used to query, update, and operate on data stored in databases.
  It's different from JavaScript in multiple ways:
  Purpose: JavaScript is a general-purpose programming language mainly used for scripting web pages and servers. SQL, on the other hand, is specifically designed for managing and querying data in databases.
  Execution Environment: JavaScript runs in web browsers and on servers (Node.js), whereas SQL is executed in database servers.
  Operations: JavaScript can create algorithms, handle application logic, and interact with HTML and CSS. SQL is focused on data manipulation like querying, inserting, updating, and deleting data.

- How do you retrieve specific columns from a database table?
  You use the SELECT statement followed by the column names.

- How do you filter rows based on some specific criteria?
  Use the WHERE clause. Example: SELECT \* FROM table_name WHERE condition;

- What are the benefits of formatting your SQL?
  Readability: Well-formatted SQL is easier to read and understand.
  Maintenance: Makes it easier to debug and modify.
  Collaboration: Helps other developers understand your code quickly.

- What are four comparison operators that can be used in a `where` clause?
  = (equal to)
  <> or != (not equal to)

  > (greater than)
  > < (less than)

- How do you limit the number of rows returned in a result set?
  Use the LIMIT keyword. Example: SELECT \* FROM table_name LIMIT number;

- How do you retrieve all columns from a database table?
  Use the asterisk _ symbol. Example: SELECT _ FROM table_name;

- How do you control the sort order of a result set?
  Use the ORDER BY clause. Example: SELECT \* FROM table_name ORDER BY column_name ASC|DESC;
  ASC is for ascending order, and DESC is for descending order. By default, it sorts in ascending order.

## Notes
