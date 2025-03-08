import { TabView } from "@/component/TabView";
import { Case1A_comp } from "./ReactMemoExample";
import { Case1B_comp } from "./ReactMemoSideEffect";

export default async function Chapter5_patterns() {
  const title = (
    <div id="title">
      Chapter 5<br />
      Patterns
    </div>
  );

  return (
    <main>
      {title}
      <TabView>
        <>
          <header>React.memo</header>
          <TabView>
            <>
              <header>
                Try using
                <i className="code-highlight code-highlight-special pulse m-1 mr-4">
                  React.memo
                </i>
                with pure functions
              </header>
              <Case1A_comp />
            </>
            <>
              <header>
                <i className="code-highlight code-highlight-special pulse m-1 mr-4">
                  React.memo
                </i>
                with side effects
              </header>
              <Case1B_comp />
            </>
          </TabView>
        </>
        <>
          <header>React.memo</header>
          <section></section>
        </>
      </TabView>
    </main>
  );
}
