module.exports = {
  
    //------get----//
    
    get_quote: (req, res, next) => {    //this happens in admin page where data renders as table
        const db = req.app.get("db")
        db.get_quote()
            .then(response => {
                console.log(response);
                res.status(200).send(response)})
    },
    
    get_email_invoice: (req, res, next) => { //this happens when paying with email and invoice data.
        const db = req.app.get("db")
        db.get_email_invoice(req.params.emailinvoice)
            .then(response => res.status(200).send(response))
    },
   //--------post-----//
    add_quote: (req, res, next) => {         //this happens when submitting modal form.
    const { name, email, phonenumber, designtype, size, color, sides, sides2, quantity, duedate, comments, invoice, image } = req.body
    const db = req.app.get("db")
    db.add_quote([name, email, phonenumber, designtype, size, color, sides, sides2, quantity, duedate, comments, invoice])
    .then(response => {
        db.add_image([ image, response[0].id ])
      .then(response => res.status(200).send(response))
        
        // res.status(200).send(response)
    
    })
    
    },
    

    add_invoice: (req, res, next) => {         //this happens in admin page with save button. 
    const { invoice, invoiceid } = req.body
    const db = req.app.get("db")
    db.add_invoice([ invoice, invoiceid ])
    .then(response => res.status(200).send(response))
    },

    //-----delete------//
    delete_quote: (req, res, next) => {   //this happens in admin page with delete button.
        const db = req.app.get("db")
        db.delete_quote([req.params.id])
            .then(response => res.status(200).send(response))
    }
}