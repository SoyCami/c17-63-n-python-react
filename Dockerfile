FROM python:3.11-bullseye
#LABEL authors="rekarenan"


WORKDIR /app
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apt-get update \
    && apt-get install -y gcc python3-dev musl-dev libmagic1 libffi-dev netcat-traditional \
    build-essential libpq-dev

# Set poetry env vars
ENV POETRY_HOME=/opt/poetry
ENV PATH="${POETRY_HOME}/bin:${PATH}"

# Install poetry
RUN curl -sSL https://install.python-poetry.org | python3 -
RUN poetry config virtualenvs.create false

# Copy packages and lock file for project
COPY ./pyproject.toml /app/
COPY ./poetry.lock /app/
RUN poetry lock --no-update
# Install dependencies
RUN poetry install
# copy project
COPY ./ ./
