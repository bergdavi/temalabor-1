import React, {useState} from 'react'
import FAQscomp from "./components/FAQscomp";

function FAQ() {
    const [faqs, setfaqs] = useState([
        {
            question: 'Mi ez itt?',
            answer: "Nem tudom!",
            open: false
        },
        {
            question: 'És ez itten?',
            answer: "Nem tudom ezt sem!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if(i === index){
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <h1 className="title"> Gyakran ismételt kérdések </h1>
                    <div className="faqs">
                        {faqs.map((faq, i) => (
                            <FAQscomp faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default FAQ;