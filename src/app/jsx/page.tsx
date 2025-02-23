import CodeHighlight from "@/component/CodeHighlight";
import { MyComponent, MyComponentSource } from "./Components";

export default function Chapter2_jsx() {
  const title = (
    <div id="title">
      Chapter 2<br />
      JSX
    </div>
  );
  return (
    <main>
      {title}
      {MyComponent()}
      <CodeHighlight>{MyComponentSource}</CodeHighlight>
    </main>
  );
}
