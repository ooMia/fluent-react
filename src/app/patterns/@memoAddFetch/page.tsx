import { Component } from "./Example";
export default async function MemoAddFetch() {
  return (
    <>
      <header>
        <i className="code-highlight code-highlight-special pulse m-1 mr-4">
          React.memo
        </i>
        with side effects
      </header>
      <Component />
    </>
  );
}
