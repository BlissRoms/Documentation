### Troubleshooting

If your build failed, there are a couple things you can try.

* Try a fresh `repo sync` to make your repository up to date. Sometimes, the Internet connection between you and GitHub can be flaky. In rare cases a commit merge might be ongoing, and you might've grabbed an incomplete merge. Mostly, this should fix the issue 70% of the time.
* Make sure your dependencies are installed correctly. Error messages help out a lot here! Often it will say `shared/linked library not found` or something along those lines.
* Make sure you sourced `build/envsetup.sh`. This is especially common and worth suspecting if none of the build commands like `breakfast` and `lunch` work. If you have `repo sync`ed do this again.
* Make sure you’re at the root of the build tree. Again, to quickly jump there, use `croot`.
* Make sure you ran `breakfast` correctly and it did not error out. Missing device files will prevent successful builds.
* Make sure your computer meets minimum requirements to compile AOSP. Chances are, you need more memory/CPU power to complete a build.
* Make sure your computer isn't faulty. This is unlikely, but to check, use a stress-test program like Prime95.

If something goes wrong and you've tried everything above, first use Google to look up your error! Most of the errors you encounter is due to misconfiguration and wrong commands entered. More often than not, Google will have the answer you are looking for. If you're still stuck and nothing fixes the problem, then ask us via [our Telegram Build Support chat.](https://t.me/Team_Bliss_Build_Support) \(Please only ask issues about BlissRoms, not other custom ROMs as we are unable to assist with those!\)
