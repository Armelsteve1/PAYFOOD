import React from "react";
import "./homePageStyle.css";
import logo from "./payfood-logo.svg";
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
          <div className="content">
            <div className="slogan-landing">
              Boostez votre chiffre d'affaires grâce à Payfood
            </div>
            <div className="decouvert">
              <p>Découvrez</p>
              <p> Payfood.</p>
            </div>
            <div className="text">
              <p>
                Chez PayFood, nous accompagnons les restaurateurs les plus
                talentueux d'île de France. Nous avons créé la plateforme
                d'engagement ultime pour les restaurants, les hôtels, les bars,
                les salles de réception et les événements.
              </p>
              <p>
                Avec PayFood, rejoignez une communauté de milliers de
                restaurateurs qui servent, stimulent, et connectent leurs clients
                comme jamais auparavant. Faites partie de cette aventure et
                réinventez l'expérience culinaire de vos clients grâce à notre
                plateforme !
              </p>
            </div>
            <button className="contact">Contactez-nous</button>
          </div>
          <img className="phone" src={logo} alt="Phone" />
        </section>
        <section className="deuxieme">
          <div></div>
        </section>
      </main >
    </div >
  );
}

export default LandingPage;
