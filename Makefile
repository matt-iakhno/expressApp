SECRET:=makefilesecret
DEV_COMPOSE_FILE=docker-compose-dev.yml
DEBUG_COMPOSE_FILE=docker-compose-debug.yml
TEST_COMPOSE_FILE=docker-compose-test.yml

.PHONY: run-api-node
run-api-node:
	@echo Starting node api
	cd api-node && \
		SECRET=${SECRET} \
		npm run dev

.PHONY: run-client-react
run-client-react:
	@echo Starting react client
	cd client-react && \
		npm run dev


.PHONY: compose-build
compose-build:
	docker compose -f $(DEV_COMPOSE_FILE) build

.PHONY: compose-up
compose-up:
	docker compose -f $(DEV_COMPOSE_FILE) up

.PHONY: compose-up-build
compose-up-build:
	docker compose -f $(DEV_COMPOSE_FILE) up --build

.PHONY: compose-up-debug-build
compose-up-debug-build:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(DEBUG_COMPOSE_FILE) up --build

.PHONY: compose-down
compose-down:
	docker compose -f $(DEV_COMPOSE_FILE) down

.PHONY: run-tests
run-tests:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(TEST_COMPOSE_FILE) run --build api-node