var elements = document.getElementsByTagName("a");
for (var index = 0; index < elements.length; index++) {
    if (!elements[index].href) {
        continue;
    }

    if (elements[index].hostname === "adfoc.us" && elements[index].search) {
        var url = elements[index].search.split("&url=");
        if (url.length != 2) {
            continue;
        }

        elements[index].href = url[1];
    }
}