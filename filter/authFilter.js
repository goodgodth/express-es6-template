import Logger from "../logger/logger";
import myServer from "../src/server";
import moment from "moment";
import {
  AuthenticationNotFoundError,
  AuthenticationTokenInvalidError,
  TIDNotFoundError
} from "../exception/errorImpl";
import healthCheckUtil from "../util/healthCheck.util";

module.exports = function authFilter(req, res, next) {
  // grab authentication token from req header

  //let token = req.header("Authorization");

  Logger.write("|FILTER REQUEST tid=" + req.headers.tid);
  healthCheckUtil.setRecentRequest(moment.now());
  console.log(JSON.stringify(healthCheckUtil.healthCheckModel));
  var _ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  var _authToken = req.headers["authorization"];
  // if (_authToken == undefined) {
  //   //throw new Error("No Token");
  //   throw new AuthenticationNotFoundError();
  // }

  next();
};
