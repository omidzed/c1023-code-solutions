import { Accordion } from './Accordion';
import './App.css';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content:
      'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  },
  {
    id: 3,
    title: 'Cascading Style Sheets',
    content:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    id: 9,
    title: 'JavaScript',
    content:
      'JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
  {
    id: 10,
    title: 'React',
    content:
      'React is a popular JavaScript library for building dynamic user interfaces. It offers a component-based architecture, efficient rendering, and a reactive data flow model, enabling developers to create scalable, fast, and interactive web applications with less coding effort.',
  },
];
function App() {
  return <Accordion topics={topics} />;
}

export default App;
