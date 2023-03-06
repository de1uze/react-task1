import React from "react";
import Cardthird from "./Cardthird";
import Cardfirst from "./Cardfirst";
import Cardsec from "./Cardsec";

export default function Card() {
  return (
    <div>
      <section className="pricing py-5">
        <Cardfirst />
        <Cardsec />
        <Cardthird />
      </section>
    </div>
  );
}
