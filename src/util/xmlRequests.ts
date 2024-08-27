let builtInLed_state = false;

export const sendXmlRequest = (targetIP: string) => {
    const xmlhttp = new XMLHttpRequest();
    const status = builtInLed_state ? "builtLed_off" : "builtLed_on";
    const setStatus = `http://${targetIP}/?function=${status}`;

    xmlhttp.open("GET", setStatus, true);

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            builtInLed_state = !builtInLed_state;
        }
    };

    xmlhttp.send();
};
