Package.describe({
    name: 'yp2:hijack-email',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Hijack emails in development.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.0');
    api.export('HijackEmail', 'server');
    api.addFiles('hijack-email.js', 'server');
});

//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('yp2:hijack-email');
//  api.addFiles('hijack-email-tests.js');
//});
