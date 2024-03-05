// const Labor = () => {
//     return ( 
//         <>
//         <div>
//         Labour law
// Main article: Indian labour law
// Indian labour law are among the most comprehensive in the world. They have been criticised by the World Bank,[32][33] primarily on the grounds of the inflexibility that results from government needing to approve dismissals. In practice, there is a large informal sector of workers, between 80 or 90 per cent of the labour force, to whom labour rights are not actually available and laws are not enforced.
//         </div>
//         <div>
//           <details >
//             <summary>Whether an Indian citizen partner is required for a foreigner or Foreign Company to start a business in India?</summary>
//             <div class="faq__content">
//                 <p>No, if a Foreign Company wants to start a business in India in the Form of a branch office or a liaison office or as a 100% subsidiary then it does not require an Indian partner in India. Such legal entities if started with the required permissions then they can legally repatriate the funds back to their country at any point of time. Only in the cases of Joint ventures Indian partner is required. In addition to that there are restrictions with regards to the permissibility of FDI in certain sectors. If it is a 100% automatic route, then approval of the Government to start the business is not necessary. In such automatic route cases paper work to be done through the dealer and to be approved by the Reserve Bank of India.</p>
//             </div>
//             </details>
//             <details>
//             <summary>How to directly approach Supreme Court?</summary>
//             <div class="faq__content">
//                 <p>An individual can directly approach the Supreme Court of India without seeking for a remedy in a lower Court or in a High Court, only when he is able to establish that one or more the fundamental rights guaranteed to that person under the Constitution of India is violated by the Government/State.

//             </p>
//             </div>
//             </details>
//             <details>
//             <summary>Is registration of marriage compulsory for divorce in Hindu Law?</summary>
//             <div class="faq__content">
//                 <p>No need. Registration of marriage is not necessary to go for divorce proceedings in Hindu Marriage Law.</p>
//             </div>
//           </details>
//         </div>
//         </>
//      );
// }
 
// export default Labor;






import { useEffect,useState } from "react"
const Labour = () => {
  
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.labour_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
  <h3>Labour law</h3>
As per the Indian Constitution, the Central as well as State Governments are empowered to enact suitable legislations to regulate and protect the interests of employees, as well as to create and increase employment opportunities.  Depending on the type of industry, nature of work undertaken, number of employees,
 location, remuneration of employees, etc., different legislation such as the Industrial Disputes Act 1947 (ID Act), Factories Act 1948 (Factories Act) and shops and establishment acts of the relevant states (S&E Act) have been enacted.
With the objective to consolidate and reform labour laws and to facilitate the ease of doing business in India, the Government of India has enacted four labour codes which subsume approximately 29 labour laws.  The four new labour codes are the Code on Wages 2019, the Code on Social Security 2020,
 the Occupational Safety, Health and Working Conditions Code 2020 and the Industrial Relations Code 2020.  Whilst all the codes have been passed by both houses of Parliament and received the assent of the President, barring a few provisions,
 the codes are yet to be completely enforced by way of a specific notification in this regard by the Central Government.  As at the time of writing this chapter, the extant labour laws referred to and explained herein shall continue to apply.

</div>


<h3 class="faq" style={{marginTop:'20px'}}>
          Frequently asked questions :
        </h3>
        
        {
  typeof backenddata === 'undefined' ? (
    <p>Loading</p>
  ) : (
    backenddata.map((item, index) => (
      <details key={index}>
        <summary>{item.question}</summary>
        <div class="faq__content faq">{item.answer}</div>
      </details>
    ))
  )
}

    </>
     );
}

 
export default Labour;