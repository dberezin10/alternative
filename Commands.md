# docker build .
создает образы Docker из файла Dockerfile

# docker build -t alternative-tags:exc_1 .
создает образы Docker из файла Dockerfile с именем "alternative-tags" и версией "exc_1"

# docker ps
Список запущенных контейнеров

# docker ps -a
Список всех контейнеров

# docker start container_id
запускает контейнер по id

### docker stop container_id || container_name
остановка контейнера

# docker images
список всех images

# docker rmi images_id
удаляет images по id

# docker run -d -p 4000:5000 --name container_name --rm images_id
* run - запуск контейнера на основе образа images
* -d -
* -p - порт (первый локальный порт, а второй из докер контейнера)
* --name container_name - имя контейнера
* --rm - удаление конейра после установки
* images_id - id контейнера



