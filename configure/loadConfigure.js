import fs from "fs";

class LoadConfigure {
  static getConfig(environment) {
    var readConfig;
    if (environment === "PRODUCTION") {
      //Production
      readConfig = fs.readFileSync(
        __dirname + "/configure.production.json",
        "utf8"
      );
    } else {
      readConfig = fs.readFileSync(
        __dirname + "/configure.staging.json",
        "utf8"
      );
    }
    //console.log(readConfig);
    let obj = JSON.parse(readConfig);
    return obj;
  }
}
export default LoadConfigure;
