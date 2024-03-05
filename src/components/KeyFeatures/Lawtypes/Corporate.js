// // import { Link } from "react-router-dom";
// const Corporate = () => {
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
 
// export default Corporate;



import { useEffect,useState } from "react"
const Corporate = () => {
  
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.corporate_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
<h3>Corporate law</h3>
Corporate law is also known as company law or corporate law. It is the potential study that determines how consumers, the community, and the environment interact with one another. The set of laws together determines how shareholders, directors, employees, creditors, as well as other stakeholders, coexists in the corporate sector.

<h4 style={{paddingTop:"10px"}}>The essential Indian business laws are as follows:</h4>
<h5>Employment and Labour Law in India- 2019:</h5>
This law highlights India’s initiative towards the codification of its labour laws on equal remuneration, wages, minimum wage rates as well as bonus payments to employees.

<h5 style={{paddingTop:"10px"}}>Corporate Social Responsibility (CSR) - 2014:</h5>
India is the first country to make corporate social responsibility mandatory. According to this businesses can devote their profits to different social facets. such facets include education, poverty, gender equality, and hunger as part of any CSR compliance.

<h5 style={{paddingTop:"10px"}}>Companies (2nd Amendment) Act 2017 and 2013:</h5>
Amendment on Companies Act 2013 introduced changes to enhance compliance and corporate governance. the amendment has modified penalties leviable for numerous offences.
Its primary objective is to reduce the burden of routine matters prior to when national company law tribunals established under the Companies act. It focuses to strengthen enforcement against serious offences.
However, the companies Amendment Act 2017 has made some prominent changes with the definitions. it also incorporates changes in vital provisions of the Companies Act.

<h5 style={{paddingTop:"10px"}}>Securities and Insurance Laws (Amendment and Validation) Act, 2010:</h5>

This Act takes into account the amendment of the Reserve Bank of India Act, 1934, the Insurance Act, 1938, the Securities Contracts (Regulation) Act, 1956, as well as the Securities and Exchange Board of India Act, 1992. This essential Act was introduced on the 20th of August 2010.

<h5 style={{paddingTop:"10px"}}>Tyre-Corporation-of-India-Limited (Disinvestment-of-Ownership) Act-2007:</h5>
This specific Act provides for disinvestment of the Government’s equity in the Tyre Corporation of India Limited. It was thus introduced on the 12th of December, 2007.

<h5 style={{paddingTop:"10px"}}>The Companies (Amendment) Act, 2006:</h5>
This essential Act was introduced on the 29th of May, 2006. It incorporates further amendments in the Companies Act, 1956. The changes determine that no business shall appoint or re-appoint an individual as the director of the company. The appointment cannot happen unless the person has been allotted a director identification number under section 266B.

<h5 style={{paddingTop:"10px"}}>Prevention of Money-Laundering (Amendment) Act, 2005:</h5>
This Act was introduced on the 21st of May, 2005 to amend the prevention of Money-Laundering Act, 2002.

<h5 style={{paddingTop:"10px"}}>Special Economic Zones Act, 2005:</h5>
This Act provides for the potential establishment, development, and management of the Special Economic Zones for the promotion of exports. This vital Act was introduced on the 23rd of June, 2005.

<h5 style={{paddingTop:"10px"}}>Prevention of Money Laundering Act, 2002:</h5>
This Act determines the formation of the core of the legal framework put in place by India. It is, however, to combat money laundering. This potential Act was introduced on the 1st of July, 2005.

<h5 style={{paddingTop:"10px"}}>The State Financial Corporations (Amendment) Act, 2000:</h5>
As introduced on the 5th of September, 2000, this Act amends the State financial corporations act, 1951.

<h5 style={{paddingTop:"10px"}}>The Prevention of Money-Laundering Bill, 1999:</h5>
As introduced on 23rd February 1999, this Bill is to prevent money-laundering. The Bill is also for the appropriation of property derived from, or involved in, money-laundering.

<h5 style={{paddingTop:"10px"}}>The National Securities and Depositories Limited- Byelaws, 1996:</h5>
This Act was put forward for the implementation of the powers granted under the Depository Act, 1996. It happens with the approval of the Securities Exchange Board of India (SEBI).

<h5 style={{paddingTop:"10px"}}>The Depositories Act,1996:</h5>
This Act was introduced on the 12th of August, 1992. It incorporates the regulation of depositories in securities.

<h5 style={{paddingTop:"10px"}}>The Foreign Trade (Development and Regulation) Act, 1992:</h5>
This potential Act determines the development as well as the regulation of foreign trade. It is by facilitating imports into and augmenting exports from India. It was thus introduced on the 7th of August, 1992.

<h5 style={{paddingTop:"10px"}}>Company Law Board Regulations, 1991:</h5>
This potential Act was introduced in the year 1991. It states that all the powers granted by subsection (6) of section 10 E of the Corporations Act,1956, the Company Law Board are included.
 
The Company Secretaries Act, 1980: This Act was introduced on the 10th of December 1980 to make provision for the regulation and development of the profession of Business Secretaries.

<h5 style={{paddingTop:"10px"}}> The Sick Industrial Companies Act, 1985:</h5>
This Act plays an essential piece of legislation dealing with the problems of rampant industrial sickness in India. This particular Act was enacted in India to detect unviable or sick companies and to help with their revival. This effective Act was introduced on 8th January 1986.

<h5 style={{paddingTop:"10px"}}>The Hire-Purchase Act, 1972:</h5>
This particular Act was introduced on 8th June 1972 to regulate the hire-purchase transactions. It is to protect the buyer of the goods on hire-purchase. It also controls certain abuses in the hire-purchase trading. It is an essential part of Indian business law.

<h5 style={{paddingTop:"10px"}}>Companies (Foreign Interests) Act, 1918:</h5>
This Act was introduced on the 26th of September, 1918. This Act determines to hold power to prohibit the alteration of association that restricts foreign interest in specific companies but with the sanction of the Government.

<h5 style={{paddingTop:"10px"}}>The Companies (Donations to National Funds) Act, 1951:</h5>
As introduced on 17th October 1951, this Act enables companies to make potential donations to national funds.

<h5 style={{paddingTop:"10px"}}>Indian Contract Act, 1872:</h5>
This important Act was introduced on the 25th of April, 1872. It states the definition of the term “contract” as an agreement legally enforceable by the law. The word thus says that for the formation of a contract, there must be an agreement that should be enforceable by law.

<h5 style={{paddingTop:"10px"}}>The Partnership Act, 1932:</h5>
As introduced on 8th April 1932, this Act defines and amend the law related to Partnership. This Act defines the Partnership as follows An agreement between two or more people who have agreed to share the profits of the company. It is carried on by all or any one of them acting upon all.

<h5 style={{paddingTop:"10px"}}>The Securities Contract (Regulation) Act, 1956:</h5>
This Act is framed to prevent the awkward transitions in securities. It happens by regulating the business of dealing therein. The Act came into total force with effect from 20th February 1957.

<h5 style={{paddingTop:"10px"}}>The Sale of Goods Act, 1930:</h5>
As introduced on the 15th of March, 1930, this Act defines and amend the law relating to the sale of goods.

<h5 style={{paddingTop:"10px"}}>The Tea Act, 1953:</h5>
An act to offer for the control by the Union of the tea industry. It incorporates the control in pursuance of the International Agreement now in force. It takes into account the cultivation of tea and its export from India. It determines the establishment of a Tea Board and Levy, a duty of excise on tea produced in India. This effective Act was introduced on the 28th of May, 1953.

<h5 style={{paddingTop:"10px"}}>The State Financial Corporation Act, 1951:</h5>
This potential Act was introduced on 31st of October, 2000. This Act is to provide for the establishment of State Financial Corporations.

The above-mentioned is a potential list of corporate laws in India.

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

 
export default Corporate;