import { Component } from "./Example";

export default async function MemoAdd() {
  return (
    <>
      <header>
        Try using
        <i className="code-highlight code-highlight-special pulse m-1 mr-4">
          React.memo
        </i>
        with pure functions
      </header>
      <Component />
    </>
  );
}
