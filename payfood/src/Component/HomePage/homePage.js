import React from "react";
import "./homePageStyle.css";
import phone from "./phone-maquette.svg";
import vector from "./icon-vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import resto1 from "./resto1.svg";
import resto2 from "./resto2.svg";
import resto3 from "./resto3.svg";
import resto4 from "./resto4.svg";
import resto5 from "./resto5.svg";
import resto6 from "./resto6.svg";
import resto7 from "./resto7.svg";
import resto8 from "./resto8.svg";
import resto9 from "./resto9.svg";
import resto10 from "./resto10.svg";
import resto11 from "./resto11.svg";
import resto12 from "./resto12.svg";
import resto13 from "./resto13.svg";


function LandingPage() {

  const restoPaths = [resto1, resto2, resto3, resto4, resto5, resto6, resto7, resto8, resto9, resto10, resto11, resto12, resto13];

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
            <button className="contact-button" onClick={() => {
              const contactPart = document.getElementById("contact-us");
              if (contactPart) {
                contactPart.scrollIntoView({ behavior: "smooth" });
              }
            }}>Contactez-nous</button>
          </div>
          <img className="phone" src={phone} alt="Phone" />
        </section>
        <section className="deuxieme" id="contact-us">
          <div className="container">
            <div className="left">
              <span>Rejoignez</span>
              <span>l'expérience</span>
              <span>Payfood</span>
              <p>Vous recevrez une réponse dans les 24 heures. Nous vous expliquerons en détail comment nous pouvons vous aider à alimenter et à développer votre marque dans le cadre du budget indiqué.</p>
            </div>
            <div className="right">
              <form className="contact-form">
                <input type="text" id="name" placeholder="Nom et prénom" name=" name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <input type="tel" id="number" name="number" placeholder="Téléphone" required />
                <input type="text" id="name" placeholder="Entreprise" name=" name" required />
                <div className="button-container">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="deuxieme">
          <div className="container">
            <div className="all-in">
              <span>L'ingrédient dont <span className="highlighted-text">tous</span> les restaurants</span>
              <span>ont besoin</span>
              <p>Payfood est le moteur de croissance qui révolutionne la façon dont les clients s'engagent, paient, et restent fidèles à votre marque.</p>
            </div>
          </div>
        </section>
        <section className="deuxieme">
          <div className="container with-quote">
            <div className="left">
              <p>Nous apportons un soutien aux meilleurs opérateurs en les aidant à prendre le contrôle de leurs clients, de leurs données et de leurs finances.</p>
            </div>
            <div className="right">
              <div className="quote-saying">
                <span className="quote-icon">&ldquo;</span>
                <p>Personnel très accueillant et aimable ! Repas très bon et à petit prix ! Mais surtout, je règle ma commande rapidement !</p>
                <span>Mélanie Dubois</span>
                <span>Restaurant Asian</span>
                <span>Foody - Nice</span>
              </div>
            </div>
          </div>
        </section>
        <section className="third" id="about-us">
          <div className="container">
            <div className="section-header">
              <span className="section-title">Goûte ça !</span>
              <span className="section-description">Avec Payfood, vous pourriez...</span>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <h3><icon>&gt;</icon> 8x</h3>
                <p>augmentation des dépenses mensuelles des clients</p>
              </div>
              <div className="grid-item">
                <h3><icon>&gt;</icon> 10x</h3>
                <p>des données clients exploitables</p>
              </div>
              <div className="grid-item">
                <h3><icon>&gt;</icon> 80%</h3>
                <p>augmentation du coût moyenne d'une commande</p>
              </div>
              <div className="grid-item">
                <h3><icon>&gt;</icon> 250%</h3>
                <p>taux de rétention et de visites de retour</p>
              </div>
              <div className="grid-item">
                <h3><icon>&gt;</icon> 14m</h3>
                <p>temps gagné par serveur par table</p>
              </div>
              <div className="grid-item">
                <h3><icon>&gt;</icon> 65%</h3>
                <p>Deviennent super fans</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth">
          < div className="container">
            <h2>Votre moteur de croissance et d'engagement</h2>
            <div className="grid-container">
              <div className="grid-row">
                <div className="grid-item item1">
                  <h3>Alimentez votre entreprise en créant votre propre devise.</h3>
                  <p>Nous avons créer un puissant système de fidélité prépayé pour débloquer une incroyable puissance de marketing et de financement.</p>
                </div>
                <div className="grid-item item2">
                  <h3>Construisez votre marque !</h3>
                  <p>Le puissant portefeuille marketing de Payfood vous permet de créer, cibler et interagir avec des fans et votre communauté de marque. Nourrissez et récompensez les gourmets qui comptent le plus. Au lieu que Google, Instagram et d'autres accèdent à votre portefeuille, accédez au portefeuille de vos clients et fidélisez-les dès aujourd'hui.</p>
                </div>
              </div>
              <div className="grid-row">
                <div className="grid-item item3">
                  <h3>Payer, gagner, savourer :</h3>
                  <p>Payfood vous propose bien plus qu'un simple moyen de paiement. Chaque repas devient une occasion de gagner et de savourer. Laissez-vous surprendre par des recommandations personnalisées. </p>
                </div>
                <div className="grid-item item4">
                  <h3>Datalicieux.</h3>
                  <p>Possédez vos données et utilisez-les comme vous le souhaitez</p>
                </div>
              </div>
              <div className="grid-row">
                <div className="grid-item item5">
                  <h3>Impactez chaque client.</h3>
                  <p>Augmentez le nombre de visiteurs et le volume des commandes grâce aux codes QR intelligents et au moteur de fidélisation de Payfood. Impactez-les aujourd'hui pour que chaque visite soit plus intéressante demain.</p>
                </div>
                <div className="grid-item item6">
                  <h3>Tous les ingrédients pour assurer votre croissance</h3>
                  <p>Avec Payfood, vous bénéficiez d'une visibilité accrue auprès d'une base d'utilisateurs croissante. Nous vous connectons avec une communauté d'utilisateurs avides de nouvelles expériences culinaires. Vous aurez l'opportunité de toucher de nouveaux clients et d'accroître votre visibilité, vous permettant ainsi d'attirer davantage de personnes vers votre établissement.</p>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="fourth">
          <div className="container">
            < div className="all-in">
              <span>Gusto,</span>
              <span>ajoutez de la magie à l’expérience</span>
              <span>Votre monnaie virtuelle</span>
              <p>L'ingrédient secret qui fait la différence. Vous possédez et créez votre propre monnaie virtuelle !</p>
              <div className="table-without-table">
                <div className="icon-and-text">
                  <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                  <p>Payfood vous propose bien plus qu'un simple moyen de paiement.</p>
                </div>
                <div className="icon-and-text">
                  <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                  <p>Chaque repas devient une opportunité de gagner et de savourer.</p>
                </div>
                <div className="icon-and-text">
                  <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                  <p>Laissez-vous surprendre par des recommandations personnalisées.</p>
                </div>
                <div className="icon-and-text">
                  <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                  <p>Gusto, ajoutez de la magie à votre expérience.</p>
                </div>
                <div className="icon-and-text">
                  <FontAwesomeIcon icon={faSquareCheck} className="task-done-icon" />
                  <p>Votre propre monnaie virtuelle.</p>
                </div>
              </div>
            </div>
          </div>
        </section >
        <section className="fifth" id="restaurants-partenaires">
          < div className="container">
            <h2>Découvrez l'ingrédient secret utilisé par<span> xxx, xxx, et xxxx</span> - et apprécié par plus de 500 établissements, dont le nombre augmente de jour en jour.</h2>
            <div className="grid-container">
              {restoPaths.map((restoPath, index) => (
                <div className="grid-item" key={index}>
                  <img src={restoPath} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div >
          </div >
        </section >
      </main >
    </div >
  );
}

export default LandingPage;
