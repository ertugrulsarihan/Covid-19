import React from "react";
import covid from "../covid2.jpg";
import mask from "../mask.png";
import stayhome from "../stay.jpg";
import M from "materialize-css";
import Footer from "./footer";

export default function Main() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  });

  return (
    <div>
      <div class="parallax-container z-depth-5">
        <div class="parallax">
          <img className="main_img" src={covid} class="img-fluid" alt="" />
        </div>
      </div>
      <div className="links z-depth-5">
        <div className="a_links">
          <a href="/countries">
            <i class="material-icons">public</i>
            <p>Country Statistics</p>
          </a>
        </div>
      </div>

      <div className="info_text">
        <h5>What is coronavirus?</h5>
        <div className="line z-depth-5">.</div>
        <p>
          What is coronavirus (coronavirus) is a large family of viruses. It
          consists of “genetic material” in its middle part, the part called
          “envelope” around it, and “protein protrusions”.The corona virus is a
          disease that was detected in 1960, with several varieties. The virus,
          which is seen mostly in animals, has also been seen in humans for the
          first time. The current outbreak first appeared in Wuhan, China, in
          December 2019.
        </p>

        <h5>What Are The Symptoms Of Coronavirus?</h5>
        <div className="line z-depth-5">.</div>
        <p>
          Coronavirus (Coronovirus ) disease, a high fever (39 degrees) that
          starts suddenly after an incubation period lasting 2-14 days),It
          manifests itself with respiratory symptoms such as cough and shortness
          of breath.Some patients may also have a sore throat and runny nose.The
          disease usually shows a moderate to severe clinical course. Severe
          disease suffered as the majority of people who lost their lives
          because of this disease, and elderly (65 years and older ), those of
          the underlying disease, lung diseases, organ failure, cancer,
          diabetes, immunosuppressive diseases, organ transplantation consists
          of those people who are using drugs that suppress the immune system.
          In young healthy adults, the disease is relatively mild.
        </p>
        <h5>How is coronavirus disease (COVID-19) diagnosed?</h5>
        <div className="line z-depth-5">.</div>
        <p>
          Coronavirus disease (COVID-19) is diagnosed with this disease with
          specially developed diagnostic kits. However, the following symptoms
          should be observed in order for the diagnosis to be made in the
          clinical examination.
        </p>
        <ul>
          <li>Persistent of coughing fits</li>
          <li>The fever with unknown origin which does not decrease</li>
          <li>Nausea that can't stop</li>
          <li>Intestinal problems (diarrhea)</li>
          <li>Difficulty in breathing and shortness of breath</li>
        </ul>
      </div>
      <div class="parallax-container ">
        <div class="parallax">
          <img className="main_img" src={mask} class="img-fluid" alt="" />
        </div>
      </div>
      <div className="info_text">
        <h5>COVID-19 New Coronavirus Disease and Symptoms</h5>
        <div className="line z-depth-5">.</div>
        <p>
          It is named “corona”, which means crown in Latin, because it resembles
          the crown of the king in shape.Corona virus (Corona virus) raises
          fever. The incubation period is shortened to 4 days and 14 days at
          most. During incubation, the person may not show any symptoms. But
          once this period is complete the symptoms may be weakness, fatigue,
          loss of appetite, sore throat, cough. New corona virus is no different
          from Influenza virus in terms of symptoms.
        </p>
        <h5>
          Who is at Risk in Coronavirus? Peopleconsidered in the Risky Group
        </h5>
        <div className="line z-depth-5">.</div>
        <p>
          ​The Elderly Should Pay More Attention.Children under two and those
          over 70 are at risk. They should be careful when entering crowded
          places. They should be careful when approaching people. Water and soap
          are very important for hygiene. Surgical mask may be worn if
          necessary. Of course, the sick have responsibilities. When we sneeze,
          we have to close it with our hands, throw the handkerchief in the
          trash and wash our hands.
        </p>
        <h5>Ways To Prevent Coronavirus</h5>
        <div className="line z-depth-5">.</div>
        <p>
          There is no vaccine yet developed to protect against coronavirus (
          Coronovirus ) disease. For this reason, the most effective method of
          protection for the time being is to avoid contact with people infected
          with the virus. Today, no people infected with CoVid-19 have been
          identified in our country. For this reason, there is no need to take
          special precautions in the community for the time being. However, many
          flu, flu-making virus circulating among people in winter months not
          only from CoVid-19', also to protect against all other respiratory
          viruses must be taken.The precaution we take to prevent transmission
          of coronavirus,upper respiratory tract infections, also apply to the
          new Coronavirus (CoVid-19).
        </p>
        <ul>
          <li>
            Hand cleaning should be considered. Hands should be washed with
            normal soap and water for at least 20 seconds. There is no need to
            use soap containing antiseptic or antibacterial.
          </li>
          <li>
            The mouth, nose and eyes should not be touched without washing
            hands.
          </li>
          <li>
            Avoid contact with sick people (if possible, be at least 1 m away).
          </li>
          <li>
            Hands should be washed, especially after contacting sick people or
            their surroundings.
          </li>
          <li>
            Since there are no people diagnosed with Coronavirus infection in
            our country today, healthy people do not need to wear a mask.
          </li>
        </ul>
      </div>
      <Footer />
      <div class="parallax-container">
        <div class="parallax">
          <img className="main_img" src={stayhome} class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
