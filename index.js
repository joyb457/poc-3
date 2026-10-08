const express = require('express');

const app = express();

app.get('/', (req,res)=>{
res.send('POC3 ArgoCD Deployment Success');
});

app.listen(3000,()=>{
console.log('App Running');
});
