const AWS = require("aws-sdk");
const cloudwatch = new AWS.CloudWatch();

module.exports.handler = async (event, context, callback) => {
  const params = {
    AlarmNames: event.alarmNames,
  };

  try {
    const data = await cloudwatch.disableAlarmActions(params).promise();
    callback(null, data);
  } catch (err) {
    callback(Error(err));
  }
};
