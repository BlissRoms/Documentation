---
order: 48
tags: [guide]
---
# Setting Up Environment

## Package Installations

1. Open your web browser and go to [Akhilnarang Scripts](https://github.com/akhilnarang/scripts).

2. Clone the entire repository by running the following command in your terminal:
   ```shell
   git clone https://github.com/akhilnarang/scripts
   ```

3. Navigate to the cloned repository by running the following command:
   ```shell
   cd scripts
   ```

4. Depending on your Linux distribution, execute the appropriate command below to set up the necessary dependencies for your build environment:
   - For Ubuntu and Debian-based distributions, run:
     ```shell
     bash setup/android_build_env.sh
     ```
     (This is the recommended option for beginners to avoid any potential issues.)

   - For Arch-based distributions (e.g., Manjaro), run:
     ```shell
     bash setup/arch-manjaro.sh
     ```

   - For Fedora, run:
     ```shell
     bash setup/fedora.sh
     ```

   - For OpenSUSE, run:
     ```shell
     bash setup/opensuse.sh
     ```

   - For Solus, run:
     ```shell
     bash setup/solus.sh
     ```

5. Wait patiently while all the dependencies are being installed.

6. Add it to PATH

   - Open .bashrc
   ```text
   nano .bashrc
   ```

   - Scroll to the end of the file and type these lines:

   ```text
   # Export ~/bin
   export PATH=~/bin:$PATH
   ```

   - Ctrl-O and enter to save, then Ctrl-X to exit nano. Now either logout and login again \(or reboot\), or `source` the file:

   ```text
   source .bashrc
   ```

# Verification
Verify the installation of the build tools by checking their versions:

   - Git: Run `git --version`.
   - Make: Run `make --version`.
   - Zip: Run `zip --version`.
   - Curl: Run `curl --version`.
   - GCC (GNU Compiler Collection): Run `gcc --version`.
   - G++ (GNU C++ Compiler): Run `g++ --version`.

Congratulations! Your build environment is now fully set up and ready to use. Enjoy building!
