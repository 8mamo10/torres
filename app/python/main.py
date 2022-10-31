import os
import time

from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello_world():
    time.sleep(5)
    name = os.environ.get("NAME", "World")
    return "Hello {}!".format(name)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
