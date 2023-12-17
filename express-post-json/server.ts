import express from 'express';

type UnsavedGrade = {
  name: string;
  course: string;
  score: number;
};
type Grade = UnsavedGrade & { id: number };

let nextId = 4;
const grades: Record<number, Grade> = {
  1: {
    id: 1,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  3: {
    id: 3,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
};

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.get('/api/grades/:id', (req, res) => {
  const id = +req.params.id;
  const grade = grades[id];
  if (!grade) {
    res.sendStatus(404);
  } else {
    res.json(grade);
  }
});

app.post('/api/grades', (req, res) => {
  if (!req.body) {
    res.status(400).send('No body');
    return;
  }
  if (!req.body.name) {
    res.status(400).send('No name');
    return;
  }
  if (!req.body.course) {
    res.status(400).send('No course');
    return;
  }
  const score = req.body.score;
  if (!score || !Number.isInteger(+score) || +score < 0 || +score > 100) {
    res.status(400).send('Score must be integer between 0 and 100');
    return;
  }
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!grades[id]) {
    res.sendStatus(404);
  } else {
    delete grades[id];
    res.sendStatus(204);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
