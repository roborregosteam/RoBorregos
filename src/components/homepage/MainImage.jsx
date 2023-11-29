import styles from "./header.module.css";

export default function MainImage() {
  const sections = [
    { name: "Home", link: "/" },
    { name: "Members", link: "/" },
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Candidates", link: "/" },
    { name: "Gallery", link: "/" },
  ];
  return (
    <div className={styles.homeHeader}>
      <div>
        <img
          src="/Rbrgs.png"
          height={300}
          width={300}
          className="ml-auto mr-auto mt-40"
        />
        <h1 className="text-center text-8xl font-semibold">ROBORREGOS</h1>
        <h2 className="text-center text-8xl font-semibold mb-40">We ...</h2>
      </div>
      <div class="absolute mt-auto inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none h-44"></div>
    </div>
  );
}
