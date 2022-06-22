# Code of Conduct

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

The Maintainers:

- **MUST NOT** get involved in arguments or resort to insults, or use hateful words, personal attacks or any other verbal or nonverbal action that is considered detrimental towards the creation of a positive environment for the team.  

- **MUST** upload:

  - All theirs device sources on [BlissRoms-Devices](https://github.com/BlissRoms-Devices) organization. It goes without saying that these should be fully buildable. Using external repos for build releases aren't allowed, unless they're from LineageOS/TheMuppets organization(s). Exceptions may be open if only it's absolutely necessary.

- **MUST** test every build before sending an OTA update to users. Each build must be thoroughly vetted by the maintainer before it is released, and all hardware and software functionalities MUST be tested before a build is released. Releasing untested builds can (and will) lead to your maintainership being revoked.

- **MUST** ship the BlissRoms Updates atleast once a month or as notified by BlissRoms Administration. If this is not possible, the reason(s) must be sent to the BlissRoms Administration within 48hrs. In the absence of any explanation, a maintainer will be contacted thrice. If there is no satisfactory answer or the administration does not receive a reply, the maintainer will be kicked without any prior warning.

- **MUST** maintain authorship of git commits that are pushed, this is a mandatory requirement for ALL repositories. Force-pushes are acceptable, but try to keep them to a minimum.

- In the event of any disagreements between maintainers, sort them out via direct messages on Telegram or XDA. Do not take your fights to our chats, approach the administration if you want something sorted out quickly. The same is valid for our public chat.

- **MUST NOT** add:

  - Any Apps that are not shipped with BlissRoms. This includes Browsers and other apps.

  - Any stock firmware apps. Only Google Camera and camera app from stock firmware is allowed only if its fully functional.

- About Sepolicy Rules, the maintainers **MUST NOT**:

  - Ignore Sepolicy Neverallows.

  - Allow write access to generic directory/file/prop labels (With some exceptions).

If any of these rules are broken, the administration will take direct action against the maintainer without prior warning.
