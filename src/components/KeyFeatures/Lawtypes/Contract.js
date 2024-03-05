// import { useEffect,useState } from "react"
// const Contract = () => {
  
//   const [backenddata,setbackenddata]=useState([{}])
//         useEffect(()=>{
//           fetch('http://localhost:5000/laws')
//           .then(respones=>respones.json())
//           .then(data=>{console.log(data);
//             setbackenddata(data.criminal_related_faqs);
//             console.log(backenddata);
//           })
//       },[])

//       return ( 
//         <>

// <div class="faq" style={{marginRight:"60px"}}>
//         <h3>Contract law</h3>
        

//  Law of contracts in India defines Contract as an agreement enforceable by law which offers personal rights,
//   and imposes personal obligations, which the law protects and enforces against the parties to the agreement.
//   The general law of contract is based on the conception, which the parties have, by an agreement, 
//  created legal rights and obligations, which are purely personal in their nature and are only enforceable by action against the party in default.<br/>
//  The Indian Contract Act 1872 is significant as it is the first successful attempt to codify the English common law of contract in the British Commonwealth. The Act was then transplanted to other jurisdictions in the British Commonwealth. The preamble of the Act makes it clear that it is intended to ‘define and amend certain parts of the law relating to contract’;
//   therefore the Act does not exhaustively set out the rules of contract law.
//   Interesting issues follow relating to the precise ambit of the Act, and the areas where there continues to be room for common law development, whether novel and unique to India, or adopted into Indian law after considering the common law developments in other jurisdictions.
//   One issue relates to the postal acceptance rule which does not state that it is an exception to the instantaneous communication rule. Another issue relates to whether the Act permits the accommodation of a subsequent development in the English common law.

// </div>
//         <h1 class="faq" style={{marginTop:'20px'}}>
//           Criminal law releted FAQ's
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

 
// export default Contract;


const Civil = () => {
    return ( 
        <>

      <div class="faq" style={{marginRight:"60px"}}>
        <h3>Contract law</h3>
        

          Law of contracts in India defines Contract as an agreement enforceable by law which offers personal rights,
          and imposes personal obligations, which the law protects and enforces against the parties to the agreement.
          The general law of contract is based on the conception, which the parties have, by an agreement, 
          created legal rights and obligations, which are purely personal in their nature and are only enforceable by action against the party in default.<br/>
          The Indian Contract Act 1872 is significant as it is the first successful attempt to codify the English common law of contract in the British Commonwealth. The Act was then transplanted to other jurisdictions in the British Commonwealth. The preamble of the Act makes it clear that it is intended to ‘define and amend certain parts of the law relating to contract’;
          therefore the Act does not exhaustively set out the rules of contract law.
          Interesting issues follow relating to the precise ambit of the Act, and the areas where there continues to be room for common law development, whether novel and unique to India, or adopted into Indian law after considering the common law developments in other jurisdictions.
          One issue relates to the postal acceptance rule which does not state that it is an exception to the instantaneous communication rule. Another issue relates to whether the Act permits the accommodation of a subsequent development in the English common law.

       </div>
       <h3 class="faq" style={{marginTop:'20px'}}>
          Frequently asked questions :
        </h3>

         <div class="faq" style={{marginRight:"60px"}} >
          <details >
            <summary>1. What is a Contract?</summary>
            <div class="faq__content">
                <p>A contract is any offer that is being placed between two or more parties. According to the history of the Indian contract act 1872, the Government of India has defined specific laws to support any contract. According to the law, two or more than two parties have to be involved in any contract. In the contract, any offer will be placed between the parties, when the points mentioned in the offer will be clearly defined. The offer will be placed by the offeror, while the other parties who need to speak about their opinion on the matter are called acceptors.</p>
            </div>
            </details>
            <details>
             <summary>2. What are the different types of Contracts?</summary>
                <div class="faq__content">
                <p>According to the IPCC contract act notes, there are different types of contracts depending on a variety of parameters. On the basis of formation, the types of contracts are express contracts, quasi-contract, implied contract, and E-contract. On the basis of validity, the types of contracts are valid contracts, agreements or void contracts, voidable contracts, illegal contracts, and enforceable contracts. Based on performance, the contract types are executed contracts, unilateral contracts, executory contracts, 
                  and bilateral contracts. These different types of contracts are defined in the Indian contract act and have been incorporated from time to time.
                </p>
               </div>
              </details>
            <details>
            <summary>3. What is the Proposal, Acceptance and Communication needed for a Contract?</summary>
            <div class="faq__content">
                <p>Every contract has some salient points which depict some future action. These are called proposals or offers. The party that offers these proposals are called proposers. All the other parties who react to such offers are called acceptors. The acceptors can accept the proposal, reject it, or put it on hold. Proper communication is necessary for both the proposer and the acceptor. Face-to-face communication is always fruitful. For business letters or e-communications, the timing of the communication is necessary for the success of the communication and the related contract.</p>
            </div>
          </details>

          <details>
            <summary>4. What are the essentials of a valid contract as provided by the Indian Contract Act, 1872?</summary>
            <div class="faq__content">
                <p>There are various elements that are essential for a contract to be considered valid which are:

The contract must involve at least two parties for it to be valid wherein, one party will make the proposal and the other will accept it.

Both the parties involved in a contract are required to have a legal existence like a company or organization or they must be natural persons.

There must be a clear intention of the parties involved in the contract to create a legal relationship between them.

The agreements must be enforceable by the law to consider them as valid contracts.

The case-specific contract must fulfill the special conditions attached to it, in order to declare them as legal and valid.

There should be a certain meaning of the contract and nothing should be left undeclared in a contract.

The agreement or the contract should be framed with clauses and conditions that are possible to perform.

The contract should be signed with the free consent of both the parties involved, that is, neither of the parties should be coerced, influenced, tricked, or misrepresented.

The contract must be designed in a way that the parties involved in the contract gain some rights, profit, or interest..</p>
            </div>
          </details>

          <details>
            <summary>5. What are the criteria for a party to be competent for a contract according to section 11 of the Indian Contract Act, 1872?</summary>
            <div class="faq__content">
                <p>For an individual to be competent for a contract, considerations like their age, mental status, and they shouldn't be disqualified from contracting by any law to which they are a part. The major qualifications for a person to be eligible to sign a contract are:

The person’s age must be at least 18 years or more.

The person or the party into consideration must be able to understand all the terms and promises stated in the contract at the time of framing of the contract itself.

The party or the person into consideration must not be disqualified from any legal ramifications. </p>
            </div>
          </details>

          <details>
            <summary>When a communication of a revocation of an offer is complete?</summary>
            <div class="faq__content">
                <p>As per Section 4(3) of Indian Contract Act, 1872, the communication of a revocation of offer is complete:

As against the person who revocates it: When it is put into a course of transmission to the person to whom it is made, so as to be out of power of the person revocating it.
As against the person to whom it is made: When it comes to his knowledge..</p>
            </div>
          </details>

          <details>
            <summary>An offer may contain a term, the non-compliance of which would amount to acceptance. Comment</summary>
            <div class="faq__content">
                <p>The offer should not impose on the offeree an obligation to reply, while making the offer, the offeror cannot say that if the offer is not accepted before a certain date it will be presumed to have been accepted, unless the offeree sends his reply, no contract will arise. There is no requirement for the acceptor to send communication of non-acceptance.</p>
            </div>
          </details>

          <details>
            <summary>What is the Privity of Contract?</summary>
            <div>
                <p>The doctrine of privities of contract means that a contract is between the parties only and no third person can sue upon it. It means that a stranger to contract cannot sue upon it. A person who is not a party to a contract cannot subject to certain well recognized exceptions, enforce the terms of the contract. In India the common law doctrine of privities of contract is applicable.

Consideration for an agreement may proceed from a third party, but the third party who is a stranger to the agreement cannot sue on the agreement. A person who is a party to the contract alone can enforce the legal rights arising there from. So a stranger to contract as a rule cannot sue upon the contract.</p>
            </div>
          </details>
        </div>
        </>
     );
}
 
export default Civil;