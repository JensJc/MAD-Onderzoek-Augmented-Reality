# MAD-Onderzoek-Augmented-Reality
Augmented Reality in het kasteel van Floris

## Kasteel Floris Cordova

#### Installing the Requirements:

Node.js must be installed, https://nodejs.org/en/.

###Android
####Java Development Kit (JDK)
Install Java Development Kit (JDK) 7 or later.

When installing on Windows you also need to set JAVA_HOME Environment Variable according to your JDK installation path (see Setting Environment Variables)

####Android SDK

Install the Android Stand-alone SDK Tools or Android Studio. Proceed with Android Studio if you plan on developing new Cordova for Android plugins or using native tools to run and debug the Android platform. Otherwise, the Android Stand-alone SDK Tools are enough to build and deploy Android applications.

Detailed installation instructions are available as part of installation links above.

####Adding SDK Packages

After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is recommended that you install the highest SDK version that your version of cordova-android supports (see above).

Open Android SDK Manager (for example, run android from the terminal) and make sure the following are installed:

* Android Platform SDK for your targeted version of Android
* Android SDK build-tools version 19.1.0 or higher
* Android Support Repository (found under "Extras")

See Android's documentation on Installing SDK Packages for more details.

####Setting environment variables
Cordova's CLI tools require some environment variables to be set in order to function correctly. The CLI will attempt to set these variables for you, but in certain cases you may need to set them manually. The following variables should be updated:

Set the JAVA_HOME environment variable to the location of your JDK installation
Set the ANDROID_HOME environment variable to the location of your Android SDK installation
It is also recommended that you add the Android SDK's tools and platform-tools directories to your PATH

###iOS
#### Xcode
There are two ways to download Xcode:

from the App Store, available by searching for "Xcode" in the App Store application.

from Apple Developer Downloads, which requires registration as an Apple Developer.

Once Xcode is installed, several command-line tools need to be enabled for Cordova to run. From the command line, run:

>$ xcode-select --install

#### Deployment Tools
The ios-deploy tools - allows you to launch iOS apps into an iOS Device from the command-line.

To install it, run the following from command-line terminal:

> $ npm install -g ios-deploy

###To deploy to the device:
Make sure your device is connected with usb to the machine.

> $ cordova run ios --device
> $ cordova run android --device

