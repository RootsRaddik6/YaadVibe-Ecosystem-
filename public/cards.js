function openAbout(app) {
    switch (app) {
        case "YAADVIBE":
            window.location.href = "/about-yaadvibe";
            break;
        case "YAADLIFE":
            window.location.href = "/about-yaadlife";
            break;
        case "PURVIBE":
            window.location.href = "/about-purvibe";
            break;
        case "IRIEVIBE":
            window.location.href = "/about-irievibe";
            break;
        default:
            alert("About page not configured.");
    }
}
