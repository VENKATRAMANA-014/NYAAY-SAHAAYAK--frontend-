
// const Environmental = () => {
//     return ( 
//         <>
//         <div>
//         Environment policies of the Government of India includes legislations related to environment. In the Directive Principles of State Policy, Article 48(a) says “the state shall endeavor to protect and improve the environment and to safeguard the forests and wildlife of the country”; Article 51-A states that “it shall be the duty of every citizen of India to protect and improve the natural environment including forests, lakes, rivers, and wildlife and to have compassion for living creatures.”

// India is one of the parties of the Convention on Biological Diversity (CBD) treaty. Prior to the CBD, India had different laws to govern the environment. The Indian Wildlife Protection Act 1972 protected biodiversity. It was amended later multiple times. The 1988 National Forest Policy had conservation as its fundamental principle. In addition to these acts, the government passed the Environment (Protection) Act 1986 and Foreign Trade (Development and Regulation) Act 1992 for control of biodiversity.

// Notably, the government has passed various legislations to curb the damage caused to the environment such as the Environmental Protection Act, 1986, Forest Conservation Act, 1980, Water Prevention and Control of Pollution Act, 1974, Biological Diversity Act, 2002, Public Liability Insurance Act 1889 and National Green Tribunal Act, 2010.

// According to Article 48 (A) of the Indian Constitution, the state shall try to protect and improve the environment. It should also endeavor to safeguard forests and wildlife of the country.

// According to Article 51(A) (g) of the Indian Constitution, every citizen of India has a fundamental duty to protect and improve the natural environment including forest, lakes, rivers, and wildlife and should have compassion for living creatures.
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
 
// export default Environmental;





// import { useEffect,useState } from "react"
// const Environmental = () => {
  
//   const [backenddata,setbackenddata] = useState([{}])
//         useEffect(()=>{
//           fetch('http://localhost:5000/laws')
//           .then(respones=>respones.json())
//           .then(data=>{console.log(data);
//             setbackenddata(data.environmental_related_faqs);
//             console.log(backenddata);
//           })
//       },)

//       return ( 
//         <>

// <div class="faq" style={{marginRight:"60px"}}>
//     We have more than 200 Central and State legislations and laws which deal with environmental issues and problems. It is true that more laws mean more difficulties in enforcement. So, there is a need to have a complete and integrated law on environmental protection for meaningful enforcement in India. But it is not enough to pass the legislations. A positive approach on the part of everyone in society is essential for effective, speedy and efficient enforcement of these legislations.
//      The Environment Protection Laws have failed to bring about the desired results. Consequently, for the purpose of efficient and effective enforcement of these laws, it is necessary to set up the Environment Courts; with one Judge and two technical experts from the field of Environmental Science and Ecology. These Courts should be allowed to adopt summary proceedings for speedy disposal of the cases. Initially we may have such courts at the state and national level which can later be extended to the district level on a need–based principle. To discourage protracted litigation, the provisions should be restricted to a single appeal. For strict enforcement of environmental laws, only misrepresentation and technical flaws should be disregarded by the courts. The jurisdiction of the Courts has been expanded by way of PIL. The Apex Court has played an important role in directing the administrative officers from time to time to take necessary steps to improve the environment. What we need is social awareness from below, not law from above, no law works smoothly unless the interaction is voluntary. In order to educate people about the environmental issues, there should be exhibition of slides in the regional languages at cinema houses and television free of cost.
//      Further, as directed by the Supreme Court, environment studies shall be made a compulsory subject at school and college levels in graded system so that there should be general growth of awareness. Finally, protection of the environment and keeping ecological balance unaffected is a task which not only the government but also every individual, association and corporation must undertake. It is a social obligation and fundamental duty enshrined in Article 51–A[g] of the Indian Constitution.
    

//      In India, environmental protection is not only protected by the country's fundamental laws, but also incorporated into human rights policies. The fundamental human right of every individual is to exist in an unpolluted environment, because a clean environment is essential to human dignity. It is essential for the public, public bodies, and state and federal administrations to distinguish the negative environmental effects of growth processes. Environmental laws must be strictly enforced because they are an effective tool for encouraging citizens to prioritise sanitation and combat pollution. However, it is equally important to instill a positive attitude towards environmental protection throughout society, as laws alone are insufficient without extensive social responsibility.

// </div>
//         <h1 class="faq" style={{marginTop:'20px'}}>
//           Environmental law releted FAQ's
//         </h1>
        
//         {
//   typeof backenddata === 'undefined' ? (
//     <p>Loading</p>
//   ) : (
//     backenddata.map((item, index) => (
//       <details key={index}>
//         <summary>{item.question}</summary>
//         <div class="faq__content faq">{item.answer}</div>
//       </details>
//     ))
//   )
// }

//     </>
//      );
// }

 
// export default Environmental;


import { useEffect, useState } from "react";

const Environmental = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/environmentals')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBackendData(data.environmental_related_faqs);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="faq" style={{ marginRight: "60px" }}>
        {/* Your content here */}
      </div>

      <h3 class="faq" style={{marginTop:'20px'}}>
          Frequently asked questions :
        </h3>

      {backendData.length === 0 ? (
        <p>Loading</p>
      ) : (
        backendData.map((item, index) => (
          <details key={index}>
            <summary>{item.question}</summary>
            <div className="faq__content faq">
              {item.answer.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))
      )}
    </>
  );
}

export default Environmental;
