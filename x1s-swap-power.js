// x1s-swap-power.js
let body = $response.body;
let obj = JSON.parse(body);

if (obj?.device?.parameters) {
    let params = obj.device.parameters;
    let voltsObj = params.find(p => p.name === "volts");
    let powerObj = params.find(p => p.name === "power");
    if (voltsObj && powerObj) {
        voltsObj.value = powerObj.value; // 用 power 的值覆盖 volts
    }
}

$done({ body: JSON.stringify(obj) });
