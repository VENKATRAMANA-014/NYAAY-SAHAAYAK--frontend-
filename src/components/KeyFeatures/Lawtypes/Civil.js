


import { useEffect,useState } from "react"
const Civil = (props) => {
  

  
       
  const [backenddata,setbackenddata]=useState([{}])
        useEffect(()=>{
          fetch('http://localhost:5000/laws')
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data.civil_related_faqs);
            console.log(backenddata);
          })
      },)

      return ( 
        <>

<div class="faq" style={{marginRight:"60px"}}>
<h3>Civil law</h3>
Law is a set of legitimate rules, statutes, and precedents, which are applicable within a given jurisdiction. The fundamental aim of Law is to deliver justice. The magnitude of different offenses decides the level of punishment. Broadly, there are two categories of Law, namely, Civil Law and Criminal Law. Civil Law deals with cases where wrong is done against a particular individual. Criminal Law includes matters of offense against society at large.
The most common civil wrongs are Negligence and breach of contract, murder, rape, etc. The source of civil and criminal laws lies in the colonial era. Historically, French Dutch German Spanish and Portuguese colonies followed a Civil Law system. Civil Law is one of the codified sets of legal rules having its roots in Europe. The core principles are drafted into such rules as forming the primary source of Law. 

Common-Law systems come from legal principles that are judge-made laws. These precedents have authority. The concept of civil justice has existed in India for ages. Manu compiled the justice system of India. His voluminous work entitled “Manava Dharma Shastra” contains the legal provision. However, the Vedas incorporate the concept of justice. 
In contrast to criminal law, civil law examines non-criminal behaviour. It is an area of law that regulates conflicts between entities and individuals. These different types of laws in India address various topics, including defamation, child custody, adequate education, divorce, union participation, property conflicts, possession issues, copyrights, and Claremore insurance.



<ol type="1">The essential features of the system are: 
<li> Civil Laws are a codified set of legal rules.</li>
<li> The codified Law bears a binding for all. There is little scope for judge-made law in civil courts. Yet, looking into the practical aspect, the judges follow the precedents.</li>
<li> Writings of the Legal Scholars do have a substantial influence on the courts.</li>
</ol>-
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
        <div className="faq__content" style={{ textAlign: 'left' }}>
          {Array.isArray(item.answer) ? (
            item.answer.map((point, pointIndex) => (
              <p key={pointIndex}>{point}</p>
            ))
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </details>
    ))
  )
}


    </>
     );
}

 
export default Civil;