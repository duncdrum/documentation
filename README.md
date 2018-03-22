# eXist-db Documentation
[![Build Status](https://travis-ci.org/eXist-db/documentation.svg?branch=master)](https://travis-ci.org/eXist-db/documentation)
[![Docbook version](https://img.shields.io/badge/docbook-5.0-19a5a4.svg)](http://docbook.org/xml/5.0/)
[![eXist-db version](https://img.shields.io/badge/eXist_db-4.0.0-blue.svg)](http://www.exist-db.org/exist/apps/homepage/index.html)

<img src="src/main/xar-resources/icon.png" align="left" width="15%"/>

This repository contains the official documentation for the [eXist-db native XML database](http://www.exist-db.org) and the application for browsing it. You can browse the latest release of the documentation on [eXist-db homepage](http://exist-db.org/exist/apps/doc/). User reporting errors should check the [contributions](#contributions) section below. Core-contributors preparing a release should consult the [release procedure](.github/RELEASE.md)

## Notice
As of January 2018 the exist-db documentation is undergoing a major rewrite. While this is work in progress ,we want to keep the contents open for community edits. Consequently, the display of the documentation will at times appear less polished then usual.  

## Dependencies
-   [Maven](https://maven.apache.org): 3.x
-   [eXist-db](http://exist-db.org): 4.0.0

## Installation
-   The default eXist-db installer includes the documentation app. Just go to your eXist server's Dashboard and select Documentation.
-   If you need to install an older version, you can download EXPath Application Packages (`.xar` files) of previous [releases](https://github.com/eXist-db/documentation/releases) from GitHub.
-   Update to the latest release via the eXist-db package manager or via the eXist-db.org public app repository at [http://exist-db.org/exist/apps/public-repo/](http://exist-db.org/exist/apps/public-repo/).

## Contributions
Found an area of the documentation that needs to be improved? Please raise an [issue](https://github.com/eXist-db/documentation/issues) or better yet submit a [pull request](https://github.com/eXist-db/documentation/pulls)!

Our test-suite performs a validation check on all articles when you open a pull request. You can speed up the review process by running `mvn validate` locally before submitting a pull request.

Should you encounter documentation for features that are deprecated in the minimum eXist-db version mentioned [above](#dependencies), you can simply delete them. If you are unsure about this, please open an [issue](https://github.com/eXist-db/documentation/issues).

## Building from source
1.  Clone the repository to your system:
    ```bash
    $ git clone https://github.com/exist-db/documentation.git
    ```

2.  Build the documentation application:
    ```bash
    $ cd documentation
    $ mvn clean package
    ```
    The compiled `.xar` file is located in the `/target` directory

3.  Install this file via the Dashboard > Package Manager.

## License
LGPLv2.1 [eXist-db.org](http://exist-db.org/exist/apps/homepage/index.html)
