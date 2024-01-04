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
    id: 11,
    title: 'React',
    content:
      'React (also known as React.js or ReactJS) is a popular JavaScript library for building dynamic user interfaces. It offers a component-based architecture, efficient rendering, and a reactive data flow model, enabling developers to create scalable, fast, and interactive web applications with less coding effort.',
  },
  {
    id: 12,
    title: 'Java',
    content:
      ' Known for its "write once, run anywhere" capability, is a highly popular, versatile language used globally for enterprise-level applications, mobile (Android) development, and large systems. It is known for its portability across platforms due to its JVM architecture.',
  },
  {
    id: 13,
    title: 'Python',
    content:
      'An efficient, object-oriented extension of C, C++ is favored for performance-critical applications like game development, real-time simulations, and software that requires direct hardware manipulation.',
  },
  {
    id: 14,
    title: 'C++',
    content:
      'An efficient, object-oriented extension of C, C++ is favored for performance-critical applications like game development, real-time simulations, and software that requires direct hardware manipulation.',
  },
  {
    id: 15,
    title: 'C#',
    content:
      'Developed by Microsoft, C# is integral to the .NET framework, widely used in Windows applications, enterprise solutions, and game development with Unity, known for its robustness and extensive toolsets.',
  },
  {
    id: 16,
    title: 'C',
    content:
      ' A foundational language for system programming, embedded systems, and operations requiring high performance and direct hardware manipulation. It is known for its efficiency and control over low-level system components.',
  },
];
function App() {
  return <Accordion topics={topics} />;
}

export default App;
