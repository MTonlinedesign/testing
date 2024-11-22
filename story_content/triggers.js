function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61CANztIEiU":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6S39DLaWE1a');
const duration = 750;
const easing = 'ease-out';
const id = '6Ph3JUEADCv';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
