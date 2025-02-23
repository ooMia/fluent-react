import Image from "next/image";

export default function RootPage() {
  const title = <div id="title">Fluent React</div>;
  const bookImage = (
    <Image
      src="/front.jpeg"
      alt="book cover"
      fill
      priority
      sizes="33vw"
      style={{ objectFit: "contain" }}
    />
  );
  return (
    <main>
      {title}
      <div className="relative h-[50vh] w-[50vw]">{bookImage}</div>
    </main>
  );
}
