import React, { useState } from 'react'

function FAQlist() {
    const [faqs, setfaqs] = useState([
        {
            question: 'Mi ez itt?',
            answer: "Nem tudom!",
            open: true
        },
        {
            question: 'És ez itten?',
            answer: "Nem tudom ezt sem!",
            open: false
        }
    ]);

    return(<div className="faqs">
            {faqs.map((faq, i) => (
                <FAQscomp faq={faq} index={i}/>
            ))}
        </div>

    )
}

export default FAQlist;