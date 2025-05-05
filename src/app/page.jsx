'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homeContainer">


  <div className="homeTopGroup">
  <div className="homeTopLeftside">
        <h1 className="">Taitaja</h1>
        <h1 className="">TietoTesti</h1>
 

        <p className="homeTopLeftDesc">Halutatko testat tietosi? Se on nyt helppoa! Valitse opettaja ja aihealue, ja aloita heiti!</p>

        <Link className="homGameLink" href="/game"><button className="homeTopButton buttonHover">Pelaa nyt!</button></Link>
     </div>

     <div className="homeTopRightside">
        <Image src="/img/home.png" width={400} height={250} alt="img" />
     </div>
  </div>

<div className="homeBottomGroup">
  <div>
  <Image src="/img/home.png" width={600} height={400} alt="img" />
  </div>

  <div className="homeBottomRight">
    <h3>Miten pelataan?</h3>

<div>
    <p>1. Tee ensimöinen valinta - keneitä haluat oppia ja mistä aiheesta?</p>
    <p>2. Päätä, kuinka monta kysymystä haluat vastata: 5, 10 tai 15.</p>
    <p>3. Vastaa kysymyksiin ja seuraa edistymistäsi reaaliaikaisesti.</p>
    <p>4. Näe pistesi pelin lopussa ja vertaa muihin.</p>
</div>
  
    <button className="homeBottomButton buttonHover">Kokeile taitojasi nyt!</button>
  </div>
</div>

    </div>
  );
}
