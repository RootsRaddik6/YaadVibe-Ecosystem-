function openApp(app) {
    switch (app) {
        case "YAADVIBE":
            window.location.href = "/yaadvibe";
            break;
        case "YAADLIFE":
            window.location.href = "/yaadlife";
            break;
        case "PURVIBE":
            window.location.href = "/purvibe";
            break;
        case "IRIEVIBE":
            window.location.href = "/irievibe";
            break;
        default:
            alert("App not configured yet.");
    }
}
