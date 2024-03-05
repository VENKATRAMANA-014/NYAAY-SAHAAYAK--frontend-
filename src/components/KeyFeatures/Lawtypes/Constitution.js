

import { useEffect,useState } from "react"
const Constitution = (props) => {
  
  const [backenddata,setbackenddata]=useState([])
  
        
  console.log(props.name);
  console.log(`http://localhost:5000/${props.url}`);
        useEffect(()=>{
          
  console.log(`http://localhost:5000/${props.url}`);
          fetch(`http://localhost:5000/${props.url}`)
          .then(respones=>respones.json())
          .then(data=>{console.log(data);
            setbackenddata(data[props.topic]);
          })
      },[props.url,props.topic])


      // console.log(backenddata);
      //     })
      // },[props.url, props.topic, backenddata])
      return ( 
        <>
        
        <div class="faq" style={{marginRight:"60px"}}>
        <h3>Constitutional law</h3>
         Constitutional and administrative law
 Main article: Indian constitutional law
 The Constitution of India, which came into effect on 26 January 1950 is the lengthiest written constitution in the world.[21] Although its administrative provisions are to a large extent based on the Government of India Act 1935, it also contains various other provisions that were drawn from other constitutions in the world at the time of its creation.[21] It provides details of the administration of both the Union and the States, and codifies the relations between the Federal Government and the State Governments.[22] Also incorporated into the text are a chapter on the fundamental rights of citizens, as well as a chapter on directive principles of state policy.[23]

The constitution prescribes a federal structure of government, with a clearly defined separation of legislative and executive powers between the Federation and the States.[24] Each State Government has the freedom to draft its own laws on subjects classified as state subjects.[25] Laws passed by the Parliament of India and other pre-existing central laws on subjects classified as central subjects are binding on all citizens. However, the Constitution also has certain unitary features, such as vesting power of amendment solely in the Federal Government,[26] the absence of dual citizenship,[27] and the overriding authority assumed by the Federal Government in times of emergency.[28]
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
        <div class="faq__content faq" style={{ textAlign: 'left' }}>
          {Array.isArray(item.answer) ? (
            item.answer.map((point, pointIndex) => (
              <p class="faq__content faq" style={{ textAlign: 'left',fontWeight:"normal" }} key={pointIndex}>{point}</p>
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

 
export default Constitution;