import React from 'react'
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            

            <Chat 
            name="Jeff"
            message= "How are you"
            timestamp= "20 minutes ago"
            profile= "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
           />

           <Chat 
           name="Elon"
           message= "Hii guys"
           timestamp= "5 minutes ago"
           profile= "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
          />

          <Chat 
          name="Bill"
          message= "Good morning friends"
          timestamp= "35 minutes ago"
          profile= "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3MzIyODc5MjE1Mjk1/billgates2012.jpg"
         />
        </div>
    )
}

export default Chats
