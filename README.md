
# Core

Engine behind the magic of our project


## Get Project

Clone the project - With HTTPS

```bash
  git clone https://github.com/SoyCami/c17-63-n-python-react.git
```

- With SSH (Ensure you have an active ssh key linked to your Github account)
```bash
  git clone git@github.com:SoyCami/c17-63-n-python-react.git
```


Go to the project directory

```bash
  cd core/
```


## Installation

### Install Core with docker

- Go to container folder and run (for the latest plugin):

```bash
  docker compose up
```
Or, if you have earlier version:
```bash
  docker-compose up
```
This will up services like database and backend in order to serve and use API

Once services are up, open a shell of backend service with:
```bash
  docker exec -it backend bash
```
If it's first time installation run:

```bash
  make update
```

### Install Core without docker
Ensure you have installed python on version 3.11 and Poetry. If not, check installation reference of [Python3.11](https://www.python.org/downloads/release/python-3110/) and [Poetry](https://python-poetry.org/docs/#installation) according to your OS.

Go to the container folder, open a terminal and run:
```bash
  poetry shell
```

It will activate virtual environment and prepare workspace for developing or run backend service.

Once activated, run
```bash
  make update
```
And finally, run service with:
```bash
  make runserver
```
## Authors

- [@renanferls](https://www.github.com/renanferls/)
- Devs pending for their usernames
