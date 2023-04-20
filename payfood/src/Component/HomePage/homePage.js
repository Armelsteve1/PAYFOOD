import React from "react";
import "./homePageStyle.css";
import phone from "./phone.png";
function LandingPage() {
  // const userCredit = 50; // Crédits de fidélité de l'utilisateur

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   // Code pour enregistrer l'utilisateur avec son adresse email
  //   alert(
  //     `Félicitations ! Vous avez reçu un bon de réduction de 20% sur votre premier achat et vous avez actuellement ${userCredit} crédits de fidélité.`
  //   );
  // };

  return (
    <div className="landing-page">
      <main className="contenaire">
        <section className="hero">
          <div clasName="contenairetext" style={{position: "absolute"}}>
            <div className="slogant_landing">
              Boostez votre chiffre d'affaires grâce à Payfood
            </div>
            <div className="decouvert">
              <p>Découvrez</p>
              <p> Payfood.</p>
            </div>
            <div class="container">
              <div class="text1">
                Chez PayFood, nous accompagnons les restaurateurs les plus
                talentueux d'île de France. Nous avons créé la plateforme
                d'engagement ultime pour les restaurants, les hôtels, les bars,
                les salles de réception et les événements.
              </div>
              <div class="text1">
                Avec PayFood, rejoignez une communauté de milliers de
                restaurateurs qui servent, stimulent, et connectent leurs
                clients comme jamais auparavant. Faites partie de cette aventure
                et réinventez l'expérience culinaire de vos clients grâce à
                notre plateforme !
              </div>
            </div>
            <button className="contact">Contactez-nous</button>
          </div>
          <div className="circle">
            <img className="phone" src={phone}></img>
          </div>
        </section>
        <section className="deuxieme">
          <div></div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
