import { TabView } from "@/component/TabView";

export default async function Layout({
  children,
  memoAdd,
  memoAddFetch,
}: {
  children: React.ReactNode;
  memoAdd: React.ReactNode;
  memoAddFetch: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <TabView>
        <>
          <header>React.memo</header>
          <TabView>
            {memoAdd}
            {memoAddFetch}
          </TabView>
        </>
        <></>
      </TabView>
    </main>
  );
}
