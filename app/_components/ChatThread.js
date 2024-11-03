"use client";
import { useState, useEffect } from 'react';
import HumanResponse from './HumanResponse';
import BotResponse from './BotResponse';
import DummyData from './DummyData';
const ChatThread = () => {
console.log(DummyData)
const [convoHistory, setConvoHistory]=useState(DummyData);
const getData=()=>{
    // api call to get chat history
    setConvoHistory(()=> DummyData)
}
useEffect(()=>{
getData()
},[])
  return (
    <section className='h-auto mb-[100px] shadow-sm flex flex-col gap-4 justify-end overflow-y-scroll'>
        {
            convoHistory?.map(({speaker,message, action, actionMessage="", actionLink=""}, i)=> {
                if (speaker=="Chatbot") return <div key={i}> <BotResponse message={message} action={action} actionMessage={actionMessage} actionLink={actionLink}/></div>
                else return <div key={i}> <HumanResponse message={message}/></div>
            }
        )
        }

        {/* <BotResponse message={["Hello, I am a bot", "Welcome to Mediswift"]}/> */}

   
    </section>

    
  )
}

export default ChatThread