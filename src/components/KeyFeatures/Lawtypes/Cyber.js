// const Cyber = () => {
//     return ( 
//         <>
        
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
 
// export default Cyber;



import { useEffect,useState } from "react"
const Cyber = () => {
  
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.cyber_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
<h3>Cyber law</h3>
  
In Simple way we can say that cyber crime is unlawful acts wherein the computer is either a tool or a target or both. Cyber crimes can involve criminal activities that are traditional in nature, such as theft, fraud, forgery, defamation and mischief, all of which are subject to the Indian Penal Code. The abuse of computers has also given birth to a gamut of new age crimes that are addressed by the Information Technology Act, 2000.

<ol>We can categorize Cyber crimes in two ways

<li>The Computer as a Target :-using a computer to attack other computers.<br/>
e.g. Hacking,Virus/Worm attacks,DOS attack etc.</li>
<li>computer as a weapon :-using a computer to commit real world crimes.<br/>
e.g. Cyber Terrorism, IPR violations,Credit card frauds,EFT frauds, Pornography etc.</li>

</ol>
Cyber law (also referred to as cyberlaw) is a term used to describe the legal issues related to use of communications technology, particularly "cyberspace", i.e. the Internet. It is less a distinct field of law in the way that property or contract are as it is an intersection of many legal fields, including intellectual property, privacy, freedom of expression, and jurisdiction. In essence, cyber law is an attempt to integrate the challenges presented by human activity on the Internet with legacy system of laws applicable to the physical world.

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

 
export default Cyber;