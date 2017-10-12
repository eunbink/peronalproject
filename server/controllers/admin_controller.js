module.exports = {
  
    //------post----//
    
    get_quote: (req, res, next) => {    //this happens in admin page where data renders as table
        const { name, email, phonenumber, duedate, image, invoice } = req.body
        const db = req.app.get("db")
        db.get_quote([name, email, phonenumber, duedate, image, invoice])
            .then(response => res.status(200).send(response))
    },
    
    get_email_invoice: (req, res, next) => { //this happens when paying with email and invoice data.
        const { email, invoice } = req.body
        const db = req.app.get("db")
        db.get_email_invoice([email, invoice])
            .then(response => res.status(200).send(response))
    },
   
    add_quote: (req, res, next) => {         //this happens when submitting modal form.
    const { name, email, phonenumber, designtype, size, color, sides, sides2, quantity, duedate, comments, invoice } = req.body
    const db = req.app.get("db")
    db.add_quote([name, email, phonenumber, designtype, size, color, sides, sides2, quantity, duedate, comments, invoice])
    },
    
    add_image: (req, res, next) => {          //this happens in request page within modal submiting modal. (using uploading library)
    const { image } = req.body
    const db = req.app.get("db")
    db.add_image([ image ])
    },

    add_invoice: (req, res, next) => {         //this happens in admin page with save button. 
    const { invoice } = req.body
    const db = req.app.get("db")
    db.add_invoice([ invoice ])
    },

    //-----delete------//
    delete_quote: (req, res, next) => {   //this happens in admin page with delete button.
        const db = req.app.get("db")
        db.delete_quote([req.params.id])
            .then(response => res.status(200).send(response))
    }
}