const express = require("express")

const router =  express.Router();
//  write all types which you need

router.get("/getEmployee", function(req,res){
    res.send([{id:19-526,Company:"CareerX", name:"Khushi"}])
})

module.exports = router;
