const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router('db.json');
const middlewares=jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req,res,next)=>{
    res.header('Aseses-Control-Allow-Origin','*');
    res.header('Access-control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
server.use(router);

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log('JSON Server runnig on port'.PORT)
});
