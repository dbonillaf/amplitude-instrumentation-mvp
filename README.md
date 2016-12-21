# Amplitude Instrumentation MVP

[Amplitude](https://amplitude.com/ Amplitude) is a product analytics tool that enable everyone to understand your users behavior.

You can track all the relevant events in your web/mobile app and then make better product decisions based on user insights.

## Requisites

1. **Create an Amplitude Account** (easy man... it's **free up to 10 million monthly events**)
2. Create a Project
3. Get your Project (API) Key within the *Settings/Projects* section (e.g. 17ce7bf229e579ad9e7fca5f445e51cc)

![Amplitude Projects](https://cloud.githubusercontent.com/assets/293330/21389613/ebefdbb6-c782-11e6-9528-53819fc3bc09.jpg "Amplitude Projects")

## How to run the app

Just run the app with the Project (API) Key as a param.

```javascript
node main.js 17ce7bf229e579ad9e7fca5f445e51cc
```

## How to use the app

* The first time the app is started, it creates a flag file (*flag.txt*) in the app directory and then the **'*installed*' event** is tracked.
* Everytime the app is started, the **'*started*' event** is tracked.
* It also launch a HTTP Server running on port 3000. Each time you browse http://localhost:3000, the **'*used*' event** is tracked.
* Each time you browse http://localhost:3000/whatever, the **'*updated*' event** is tracked.
* Each 30s running, the **'*24h-run*' event** is tracked.
* When you stop the app, using CTRL+C in the terminal, the **'*stopped*' event** is tracked. 

## How to manage the events tracked

You can go to the User Activity tab in Amplitude and then check the data or generate a dashboard to analyze it:

![Amplitude User Activity](https://cloud.githubusercontent.com/assets/293330/21389492/5ca1d4e6-c782-11e6-8e60-0e2be5d329e0.jpg "Amplitude User Activity")

## EXTRA BALL: Interesting Links

[Amplitude JavaScript SDK](https://github.com/amplitude/Amplitude-Javascript)
[Amplitude HTTP API](https://amplitude.zendesk.com/hc/en-us/articles/204771828-HTTP-API)
[Amplitude HTTP API Wrapper for Node](https://www.npmjs.com/package/amplitude)

