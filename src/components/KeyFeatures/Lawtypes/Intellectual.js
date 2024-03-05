// const Intellectual = () => {
//     return ( 
//         <>
//         <div>
//             iuogsvub
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
 
// export default Intellectual;



import { useEffect,useState } from "react"
const Intellectual = () => {
  
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.intellectual_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
<h3>Intellectual law</h3>
Today, India is on its way to adopting a balanced approach towards creating
a stimulus for the betterment of the IPR industry as a whole. Recent developments
in India, be it the New IPR policy or providing an effective toolkit in the form of
checklist that will act as a reckoner for the police to deal with IP crimes or
encouragement to innovators in terms of speedy patent examination in case they
file first in India, all are a part of much needed attempt to improve the overall
security of IPR and encouragement to create more IP in the country. India is having
all the resources in terms of available raw material, cheap labour, innovative and
creative dedicated manpower. No doubt that India will definitely harness its
proportionate share in global trade by exploration in Intellectual Property Rights
and mark its footprint on international map as "Creative India; Innovative India'
रचना क भारत ;अिभनव भारत"

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

 
export default Intellectual;