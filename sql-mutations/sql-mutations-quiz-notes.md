# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  SQL CRUD operations refer to the four basic functions that are performed on database data: Create, Read, Update, and Delete. Let's break down each operation and how they are typically used in SQL, along with the other questions you've asked.

  CRUD Operations in SQL
  Create: Adding new records to a table. In SQL, this is done using the INSERT statement.
  Read: Retrieving or reading data from a database. This is achieved using the SELECT statement.
  Update: Modifying existing records. The UPDATE statement is used for this purpose.
  Delete: Removing records from a database. This is done with the DELETE statement.

- How do you add a row to a SQL table?
  Add a Single Row: You use INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);

- How do you add multiple rows to a SQL table at once?
  Add Multiple Rows: You can insert multiple rows in a single INSERT statement like INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...), (value3, value4, ...), ...;

- How do you update rows in a database table?
  You use the UPDATE statement: UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;

- How do you delete rows from a database table?
  To delete rows, you use DELETE FROM table_name WHERE condition;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  The WHERE clause specifies which rows should be updated or deleted. Without it, all rows in the table would be affected, which can lead to data loss or corruption.

- How do you accidentally delete or update all rows in a table?
  This happens when you omit the WHERE clause in an UPDATE or DELETE statement. For example, DELETE FROM table_name; without a WHERE will delete every row.

- How do you get back the modified row without a separate `select` statement?
  Some SQL databases support returning the modified rows directly as part of the UPDATE or DELETE operation, typically using RETURNING clause, like UPDATE table_name SET column = value WHERE condition RETURNING \*;

- Why did you get an error when trying to delete certain films?
  Foreign Key Constraints: If the row you're trying to delete is referenced by another table through a foreign key, it can prevent deletion.
  Permissions: Your user might not have the necessary permissions to delete records.
  Triggers: Some databases have triggers that can prevent deletion under certain conditions.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
