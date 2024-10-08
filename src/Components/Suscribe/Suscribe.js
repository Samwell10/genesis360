import "./Suscribe.css"
export const Suscribe = () => {
    return ( 
        <div className="suscribe">
            <h4>Get More From Genesis360</h4>
            <p>Enter your email to receive financial education content and product updates from Genesis360</p>
            <div className="suscribe-form">
                <input
                type="email"
                >
                </input>
                <button>Subscribe</button>
            </div>
            <p>You can unsubscribe at any time.</p>
        </div>
    );
}
 
export const Action = () => {
    return ( 
        <div className="suscribe action">
            <h4>Get a Business Loan Today</h4>
            <button>Get Started</button>
        </div>
    );
}