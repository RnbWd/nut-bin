# nut-bin

> Binary wrapper for [nut](https://matthieudelaro.github.io/nut/) - docker cli tool

## How to install

    $ npm install -g nut-bin

## Nut
**Nut** is a command line tool which offers a solution to common frustrations of developers. It hides the complexity of development environments, and extends them with customizable macros. Whether you develop in Swift, Go, Java, or C++, what you need is build/run/test the app. So just do it:

    $ nut --init # create nut.yml file (equivalent of package.json for npm)
    $ nut build
    $ nut run
    $ nut test

**Nut** mounts the current folder in a [Docker](https://www.docker.com/) container, and executes commands on your behalf, according to the project configuration. The configuration is read from `nut.yml` file, in the current folder. You can choose the Docker image to use, declare volumes to mount, and define commands (called macros) such as *build*, *run*, and *test*.

Nut is in early stage of development. It has been tested on Ubuntu and on MacOS with *Docker for Mac*. Feedbacks and contributions to add features and to make Nut run on other systems are welcome (Windows, Docker Toolbox, etc).

Check the [wiki](https://github.com/matthieudelaro/nut/wiki) to read some tutorials (GPU support, Caffe, TensorFlow, etc).

Full documentation can found in the [main repository](https://github.com/matthieudelaro/nut)

MIT
