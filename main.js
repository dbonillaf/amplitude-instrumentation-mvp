var fs = require('fs');
var express = require('express');
var schedule = require('node-schedule');
var Amplitude = require('amplitude')

var app = express();
//var amplitude = amplitude = new Amplitude('23ce7bf029e579ad9e7fca5f446e51cc');
var amplitide;
var user = 'danny';
var message = 'Pekin';
var flagfile = "flag.txt"

if(process.argv[2] != null) {
  amplitude = new Amplitude(process.argv[2]);
} else {
  throw "Please, run the script with one param with your Amplitude Key";
}

// Event 'Installed' only if there's no local file as a flag
fs.stat(flagfile, function(err, stat) {
    if(err == null) {
        //console.log('File exists');
    } else if(err.code == 'ENOENT') {
        // file does not exist
        fs.writeFile(flagfile, 'The app has been installed', function (err) {
              if (err) throw err;
          });
          var data = {
            event_type: 'installed', // required
            user_id: user, // only required if device id is not passed in
            //device_id: 'some id', // only required if user id is not passed in
            event_properties: {
              'time': new Date(),
              'CPU usage %' : '35',
              'IP Address' : '131.228.17.26'
            },
            user_properties: {
              'version_used' : '1.0',
              'IP Address' : '131.228.17.26'
            }
          };
          amplitude.track(data);
        console.log("Installed for the very first time!")
    } else {
        console.log('Some other error: ', err.code);
    }
});

// Event 'Stopped'
process.on('SIGINT', function () {
  console.log('\nGraceful Stopping...');
  var data = {
    event_type: 'stopped', // required
    user_id: user, // only required if device id is not passed in
    //device_id: 'some id', // only required if user id is not passed in
    event_properties: {
      'time': new Date(),
      'CPU usage %' : '35',
      'IP Address' : '131.228.17.26'
    },
    user_properties: {
      'version_used' : '1.0',
      'IP Address' : '131.228.17.26'
    }
  };
  amplitude.track(data);
  console.log('App Stopped');
  setTimeout(function(){
      process.exit(0);
  }, 3000);
});

// TODO: Event '24h-Run'
var rule = new schedule.RecurrenceRule();
//rule.second = new schedule.Range(0, 10, 20, 30, 40, 50);
rule.second = [0, 30];

const job2 = schedule.scheduleJob(rule, function(){
  //console.log('The answer to life, the universe, and everything!');
  var data = {
    event_type: '24h-run', // required
    user_id: user, // only required if device id is not passed in
    //device_id: 'some id', // only required if user id is not passed in
    event_properties: {
      'time': new Date(),
      'CPU usage %' : '35',
      'IP Address' : '131.228.17.26'
    },
    user_properties: {
      'version_used' : '1.0',
      'IP Address' : '131.228.17.26'
    }
  };
  amplitude.track(data);
  console.log('\'24h-run\' in 30 seconds');
});

// Mapping
app.get('/', function (req, res) {
  // TODO Event 'Used'
  console.log('App Used');
  var data = {
    event_type: 'used', // required
    user_id: user, // only required if device id is not passed in
    //device_id: 'some id', // only required if user id is not passed in
    event_properties: {
      'time': new Date(),
      'CPU usage %' : '35',
      'IP Address' : '131.228.17.26'
    },
    user_properties: {
      'version_used' : '1.0',
      'IP Address' : '131.228.17.26'
    }
  };
  amplitude.track(data);
  res.send('Good Morning ' + message + ' !!!');
});

app.get('/*', function (req, res) {
  // Event 'Updated'
  message = req.url.substr(1, req.url.length);
  var data = {
    event_type: 'updated', // required
    user_id: user, // only required if device id is not passed in
    //device_id: 'some id', // only required if user id is not passed in
    event_properties: {
      'time': new Date(),
      'CPU usage %' : '35',
      'IP Address' : '131.228.17.26'
    },
    user_properties: {
      'version_used' : '1.0',
      'IP Address' : '131.228.17.26'
    }
  };
  amplitude.track(data);
  console.log('App Updated');
  res.send('Good Morning ' + message + ' !!!');
});

// Server Config
app.listen(3000, function () {
  // Event ' Started'
  var data = {
    event_type: 'started', // required
    user_id: user, // only required if device id is not passed in
    //device_id: 'some id', // only required if user id is not passed in
    event_properties: {
      'time': new Date(),
      'CPU usage %' : '35',
      'IP Address' : '131.228.17.26'
    },
    user_properties: {
      'version_used' : '1.0',
      'IP Address' : '131.228.17.26'
    }
  };
  amplitude.track(data);
  console.log('App Started');
})
