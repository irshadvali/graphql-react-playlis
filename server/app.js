const express=require("express");
const graphqlHttp=require("express-graphql");
const schema=require("./schema/schema")

const mongoose=require("mongoose")
var cors = require('cors')
const app=express();
// allow cross-origin request
app.use(cors())
mongoose.connect('mongodb://abc:abc@ds145083.mlab.com:45083/gql-irshad')

mongoose.connection.once('open',()=>{
    console.log("connected to database")
})

app.use("/graphql",graphqlHttp({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("now listining for request on port 4000")
});
