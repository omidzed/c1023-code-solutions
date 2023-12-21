# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  Props (short for "properties") are how you pass data and functions to child components in React. They allow for dynamic data sharing between components.
  They are read-only, meaning you cannot modify props inside a component.

- How do you declare and access props in a component?
  Props are accessed as parameters and similarly to object properties.

type UserCardProps {
name: string;
hobby: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, hobby }) => {
return (

<div>
  <h2>{name}</h2>
  <p>Hobby: {hobby}</p>
</div>
  );
};

- How do you pass props to a component?

const App: React.FC = () => {
return (

  <div>
    <UserCard name="David" hobby="Hiking" />
  </div>
  );
};

- How do you write JavaScript expressions in JSX?
  Any JS expression can become JSX by wrapping { } around it. For example:

const car = "Ferrari";
const element = <p>My favorite ride is a {car}</p>;

## Notes

Remember, while props are essential in React for component communication, they should be used thoughtfully to maintain component independence and reusability. As you're becoming more comfortable with React, keep exploring how props can be used to efficiently pass data and functions down your component tree.

6. Foobar({Props});
7. Foobar({name, rank, serialNo});
8. <button onClick={Foobar}> Click Me! </button>;
9. Component
10. props
11. Looking at its definition
12. function Baz(foo: string, bar: string){
    ...
    }
13. <card onClick={Baz}></card>
