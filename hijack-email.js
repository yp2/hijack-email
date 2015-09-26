// Write your package code here!

HijackEmail = function (options) {
    var hjOpt = {},
        hijack = Meteor.settings.hijackEmail,
        hijackAddress = Meteor.settings.hijackEmailAddress,
        emailRe = re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        hijackEmail = true;

    if (!hijack) {
        hijackEmail = false;
    } else if (hijack && !emailRe.test(hijackAddress)) {
        hijackEmail = false;
        console.log("To hijack email set proper email address in app settings");
    }

    if (hijackEmail)
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                if (hijackEmail && (prop === 'to' || prop === "cc" || prop === "bcc") ) {
                    hjOpt[prop] = hijackAddress;
                } else if (hijackEmail && prop === 'subject') {
                    hjOpt[prop] = "-- Email hijacked. Email send to: "+ options['to'] + ". Subject: " + options[prop] + " --";
                } else {
                    hjOpt[prop] = options[prop];
                }
            }
        }
    else {
        return options;
    }
    return hjOpt;
};
