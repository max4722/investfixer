/**
 * Created by Maksym on 09.08.2016.
 */

var body = document.body;
body.classList.remove('takeover');
body.attributes.removeNamedItem('style');
var element = document.getElementById('abPopup');
if (element !== null) {
    element.parentNode.removeChild(element);
}
element = document.getElementById('ab-intro');
if (element !== null) {
    element.parentNode.removeChild(element);
}
