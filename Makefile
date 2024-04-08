.PHONY: install
install:
	poetry install

.PHONY: install-pre-commit
install-pre-commit:
	poetry run pre-commit uninstall; poetry run pre-commit install

.PHONY: lint
lint:
	poetry run pre-commit run --all-files

.PHONY: migrate
migrate:
	poetry run python manage.py migrate

.PHONY: makemigrations
makemigrations:
	poetry run python manage.py makemigrations

.PHONY: runserver
runserver:
	poetry run python manage.py runserver

.PHONY: superuser
superuser:
	poetry run python manage.py createsuperuser

.PHONY: update
update: install migrate install-pre-commit ;

.PHONY: upservices
upservices: docker version ;
