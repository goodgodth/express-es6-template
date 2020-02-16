import express from "express";
import router from "../routes/routes";
import loadConfig from "../configure/loadConfigure";
import Logger from "../logger/logger";
import authFilter from "../filter/authFilter";
import bodyParser from "body-parser";
import moment from "moment";
import healthCheckUtil from "../util/healthCheck.util";

//Load Variable from Configure
var configure_var;
if (process.argv[2] === "PRODUCTION") {
  //Production
  configure_var = loadConfig.getConfig("PRODUCTION");
} else {
  configure_var = loadConfig.getConfig("STAGING");
}
console.log(configure_var);
//var logger = new Logger(configure_var, "info");
//Logger.setConfigure(configure_var);

//Logger.configureObj = configure_var;
//Logger.write("load Configure : " + JSON.stringify(configure_var));
//Logger.setConfigure(configure_var);
//Logger.configureObj = configure_var;
//console.log(Logger.getConfigure());
//console.log(Logger.configureObj);
Logger.configureObj = configure_var;
//console.log(Logger.configureObj);
Logger.write("load Configure : " + JSON.stringify(Logger.configureObj));

//const now = moment().format("YYYY-MM-DD HH:mm:ss");
//const serverHealthCheck = new healthCheck(now, 0, now);
//Logger.write("Server Start ... : " + JSON.stringify(serverHealthCheck));

const app = express();
app.use(express.json());

app.use(bodyParser.json({ limit: "20mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "20mb",
    extended: true
  })
);

//console.log(moment.now());

healthCheckUtil.setServiceOn(moment.now());
//console.log(JSON.stringify(healthCheckUtil.healthCheckModel));

app.use(authFilter);

app.use(router);
//app.use(authFilter);
//app.listen(process.env.PORT || 5000);
app.listen(configure_var.port);

export default app;
//module.exports.appVariable = configure_var;
module.exports.Logger = Logger;
