const amazingThings = [
  { id: 1, label: "햇살" },
  { id: 2, label: "바람" },
  { id: 3, label: "비" },
  { id: 4, label: "눈" },
];

const MyComponent = () => (
  <section id="list">
    <h1>내가 만든 목록!</h1>
    <p>대단하지 않나요? 멋진 것들이 모여 있습니다!</p>
    <ul>
      {amazingThings.map((t) => (
        <li key={t.id}>{t.label}</li>
      ))}
    </ul>
  </section>
);

const MyComponentSource: string = `const amazingThings = [
    { id: 1, label: '햇살' },
    { id: 2, label: '바람' },
    { id: 3, label: '비' },
    { id: 4, label: '눈' },
];

const MyComponent = () => (
    <section id="list">
        <h1>내가 만든 목록!</h1>
        <p>대단하지 않나요? 멋진 것들이 모여 있습니다!</p>
        <ul>
            {amazingThings.map(t => <li key={t.id}>{t.label}</li>)}
        </ul>
    </section>
)   
`;

export { MyComponent, MyComponentSource };
