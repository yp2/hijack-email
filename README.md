Hijack emails in development.
=============================

### Installation

```
meteor add yp2:hijack-email
```

### Usage

To hijack emails set two option in your app settings:

```json
{
    "hijackEmail": true,
    "hijackEmailAddress": "email.address.for.hijacked.emails@domain.com"
}
```

In your app build `Email.send()` options object through `HijackEmail` function that returns modified options object based on your settings.

```javascript
Email.send(HijackEmail({
    from: 'foo@bar.com',
    to: 'to@domain.com',
    subject: 'Subject ',
    text: 'Content'
}))
```

`HijackEmail` if proper options will be set in settings, will replace `to`, `cc`, `bcc` with email address defined in
your app settings - `hijackEmailAddress` also subject will be change to: _-- Email hijacked. Email send to: to@domain.com. Subject: Subject --_
