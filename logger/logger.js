import logger from "logger";
import dateFormat from "dateformat";
import path from "path";
import fs from "fs";

module.exports.configureObj = {};
module.exports.write = function(message) {
  var HOMEOFAPP = __dirname;
  //var log = logger.createLogger(HOMEOFAPP + "/logs/" + this.logfilename);

  var now = new Date();
  var processname = this.configureObj.project_name;
  var now_dt_by_format = dateFormat(now, "yyyy-mm-dd HH:MM:ss,l");
  var out = now_dt_by_format + " " + processname + " " + message;
  fs.appendFile(
    path.resolve("logs/" + this.configureObj.logfilename),
    out + "\n",
    function(err) {
      if (err) {
        return console.log(err);
      }
      console.log(out);
    }
  );
};
