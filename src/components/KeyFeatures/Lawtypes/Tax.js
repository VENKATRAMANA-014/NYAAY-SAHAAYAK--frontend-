// const Tax = () => {
//     return ( 
//         <>
//         <div>
//         Tax law
// Indian tax law involves several different taxes levied by different governments. Income Tax is levied by the Central Government under the Income Tax Act 1961. Customs and excise duties are also levied by the Central government. Sales tax is levied under VAT legislation at the state level. Since a new tax reform in the form of GST was levied through constitutional amendment and came into existence since 1 July 2017 which took the place of excise duties and VAT.

// The authority to levy a tax is derived from the Constitution of India which allocates the power to levy various taxes between the Centre and the State. An important restriction on this power is Article 265 of the Constitution which states that "No tax shall be levied or collected except by the authority of law."[45] Therefore, each tax levied or collected has to be backed by an accompanying law, passed either by the Parliament or the State Legislature. In 2010-11, the gross tax collection amounted to ₹ 7.92 billion (Long scale), with direct tax and indirect tax contributing 56% and 44% respectively.[46]
//         </div>
//         <div>
//           <details>
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
 
// export default Tax;



import { useEffect,useState } from "react"
const Tax = () => {
  
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.tax_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
<h3>Tax law</h3>
Tax law is the practice of law that relates to the assessment and payment of taxes. Tax laws come from a variety of sources....They're based in federal and state constitutions, laws and regulations. Tax law involves understanding, implementing and defending the payment or non-payment of taxes.

Taxes in India are levied by the Central Government and the state governments. Some minor taxes are also levied by the local authorities such as the Municipality.

The authority to levy a tax is derived from the Constitution of India which allocates the power to levy various taxes between the Central and the State. An important restriction on this power is Article 265 of the Constitution which states that No tax shall be levied or collected except by the authority of law. Therefore, each tax levied or collected has to be backed by an accompanying law, passed either by the Parliament or the State Legislature. In 2015-2016, the gross tax collection of the Centre amounted to ₹14.60 trillion (US$210 billion).


Indian tax law involves several different taxes levied by different governments. Income Tax is levied by the Central Government under the Income Tax Act 1961. Customs and excise duties are also levied by the Central government. Sales tax is levied under VAT legislation at the state level. Since a new tax reform in the form of GST was levied through constitutional amendment and came into existence since 1 July 2017 which took the place of excise duties and VAT.

 The authority to levy a tax is derived from the Constitution of India which allocates the power to levy various taxes between the Centre and the State. An important restriction on this power is Article 265 of the Constitution which states that "No tax shall be levied or collected except by the authority of law."[45] Therefore, each tax levied or collected has to be backed by an accompanying law, passed either by the Parliament or the State Legislature. In 2010-11, the gross tax collection amounted to ₹ 7.92 billion (Long scale), with direct tax and indirect tax contributing 56% and 44% respectively.[46]
    
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

 
export default Tax;