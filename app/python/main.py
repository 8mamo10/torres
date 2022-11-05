import os
import time
import logging

from flask import Flask

app = Flask(__name__)


def some_heavy_task():
    logging.warning("Start heavy task!!")
    time.sleep(5)
    logging.warning("Finish heavy task!!")


@app.route("/")
def hello_world():
    some_heavy_task()
    name = os.environ.get("NAME", "World")
    return "Hello {}!".format(name)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
