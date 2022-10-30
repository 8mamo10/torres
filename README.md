# torres

```
$ npm start
$ PORT=8081 NAME=node1 npm start
$ PORT=8082 NAME=node2 npm start
$ PORT=8081 NAME=node1 URL=http://127.0.0.1:8091 npm start
```

```
$ python -m venv .venv
$ source .venv/bin/activate
.venv> pip install --upgrade pip
.venv> pip install -r requirements.txt
.venv> python main.py
.venv> PORT=8091 NAME=python1 python main.py
.venv> PORT=8092 NAME=python2 python main.py
```

```
 $ gcloud run deploy
```
