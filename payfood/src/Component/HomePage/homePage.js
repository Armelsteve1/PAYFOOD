import React from "react";
import "./homePageStyle.css";
import phone from "./phone-maquette.svg";
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
              <p>Ne vous préoccupez plus de l’addition.</p>
            </div>
            <div className="decouvert">
              <p>Découvrez</p>
              <p> Payfood</p>
            </div>
            <div className="text">
              <p>
                Chez PayFood, nous accompagnons les restaurateurs les plus talentueux d'île de France. Nous avons créé la plateforme d'engagement ultime pour les restaurants, les hôtels, les bars, les salles de réception et les événements.
              </p>
            </div>
            <button className="contact-button">Contactez-nous</button>
          </div>
          <img className="phone" src={phone} alt="Phone" />
        </section>
        <section className="deuxieme">
          <div className="title">
            <div>
              <span>Rejoignez</span>
              <span>l'expérience</span>
              <span>Payfood</span>
            </div>
            <p>Vous recevrez une réponse dans les 24 heures. Nous vous expliquerons en détail comment nous pouvons vous aider à alimenter et à développer votre marque dans le cadre du budget indiqué.</p>
          </div>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ultrices libero.</div>
        </section>
      </main >
    </div >
  );
}

export default LandingPage;
